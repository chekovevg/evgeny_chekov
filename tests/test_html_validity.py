from pathlib import Path
from urllib.parse import urlparse

import pytest
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent

HTML_FILES = list(ROOT.glob('*.html'))


def _parse_html(path: Path) -> BeautifulSoup:
    content = path.read_text(encoding='utf-8')
    return BeautifulSoup(content, 'html5lib')


@pytest.mark.parametrize('html_path', HTML_FILES)
def test_html_validity(html_path: Path) -> None:
    """Ensure HTML parses and referenced resources exist."""
    soup = _parse_html(html_path)

    resource_attrs = [('link', 'href'), ('script', 'src'), ('img', 'src')]
    for tag, attr in resource_attrs:
        for element in soup.find_all(tag):
            url = element.get(attr)
            if not url:
                continue
            parsed = urlparse(url)
            if parsed.scheme or parsed.netloc:
                continue  # skip external resources
            resource_path = (ROOT / parsed.path.lstrip('/')).resolve()
            assert resource_path.exists(), (
                f"{html_path.name} references missing resource {parsed.path}"
            )


@pytest.mark.parametrize('html_path', HTML_FILES)
def test_has_viewport_meta(html_path: Path) -> None:
    """Every page should declare viewport for responsive rendering."""
    soup = _parse_html(html_path)
    viewport = soup.find('meta', attrs={'name': 'viewport'})
    assert viewport is not None, f"{html_path.name} is missing viewport meta"


@pytest.mark.parametrize('html_path', HTML_FILES)
def test_internal_paths_do_not_contain_spaces(html_path: Path) -> None:
    """Keep local file URLs readable and deployment-friendly."""
    soup = _parse_html(html_path)
    tag_attr_pairs = [('a', 'href'), ('link', 'href'), ('script', 'src'), ('img', 'src')]

    for tag, attr in tag_attr_pairs:
        for element in soup.find_all(tag):
            url = element.get(attr)
            if not url:
                continue
            parsed = urlparse(url)
            if parsed.scheme or parsed.netloc:
                continue
            assert ' ' not in parsed.path, (
                f"{html_path.name} contains spaces in local path {parsed.path}"
            )


@pytest.mark.parametrize('html_path', HTML_FILES)
def test_images_have_alt_text(html_path: Path) -> None:
    """All images should provide informative alt text."""
    soup = _parse_html(html_path)

    for image in soup.find_all('img'):
        alt_text = image.get('alt')
        assert alt_text is not None and alt_text.strip(), (
            f"{html_path.name} contains image without meaningful alt text"
        )
