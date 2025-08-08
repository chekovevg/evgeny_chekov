from pathlib import Path
from urllib.parse import urlparse

import pytest
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent

HTML_FILES = list(ROOT.glob('*.html'))

@pytest.mark.parametrize('html_path', HTML_FILES)
def test_html_validity(html_path: Path) -> None:
    """Ensure HTML parses and referenced resources exist."""
    content = html_path.read_text(encoding='utf-8')
    soup = BeautifulSoup(content, 'html5lib')

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
