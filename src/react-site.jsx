import {
  ArrowLeft,
  ArrowRight,
  Brush,
  Camera,
  Code2,
  Layers3,
  ScanText
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  bwPhotos,
  colorPhotos,
  copyBlocks,
  designProjects,
  homeLinks,
  photoBranches,
  reactPageMap,
  socialLinks,
  staticPageMap,
  magazinePhotos
} from "@/react-site-data";

const pageMeta = {
  index: {
    title: "evgeny chekov",
    eyebrow: "React + shadcn version",
    backHref: null,
    backLabel: null,
    showLargeTitle: false
  },
  cv: { title: "About", eyebrow: "Profile", backHref: reactPageMap.index, backLabel: "Back home" },
  design: { title: "Design", eyebrow: "Selected work", backHref: reactPageMap.index, backLabel: "Back home" },
  magazine: { title: "Magazine", eyebrow: "Editorial", backHref: reactPageMap.design, backLabel: "Back to design" },
  "magazine-cover": {
    title: "Magazine cover",
    eyebrow: "Editorial",
    backHref: reactPageMap.design,
    backLabel: "Back to design"
  },
  experiments: {
    title: "Experiments",
    eyebrow: "Playground",
    backHref: reactPageMap.index,
    backLabel: "Back home"
  },
  "photo-gallery": {
    title: "Photography",
    eyebrow: "Archive",
    backHref: reactPageMap.index,
    backLabel: "Back home"
  },
  "photo-gallery-bw": {
    title: "Black and white",
    eyebrow: "Photography",
    backHref: reactPageMap["photo-gallery"],
    backLabel: "Back to archive"
  },
  "photo-gallery-clr": {
    title: "Color",
    eyebrow: "Photography",
    backHref: reactPageMap["photo-gallery"],
    backLabel: "Back to archive",
    showLargeTitle: true
  }
};

function ArchitectureSwitch({ page }) {
  return (
    <div className="mb-8 flex justify-end">
      <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-1.5 py-1 shadow-sm">
        <a
          href={staticPageMap[page]}
          className="rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          HTML/CSS
        </a>
        <span className="rounded-full bg-foreground px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-background">
          React + shadcn
        </span>
      </div>
    </div>
  );
}

function Shell({ page, children }) {
  const meta = pageMeta[page];
  const showLargeTitle = meta.showLargeTitle ?? true;

  return (
    <main className="ui-kit-page min-h-screen px-6 py-6 sm:px-8">
      <div className="mx-auto max-w-[960px]">
        <ArchitectureSwitch page={page} />

        <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <a
              href={reactPageMap.index}
              className="text-2xl font-normal tracking-[-0.03em] text-foreground transition-colors hover:text-foreground/70"
            >
              evgeny chekov
            </a>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {meta.eyebrow}
            </p>
            {showLargeTitle ? (
              <h1 className="pt-2 text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl">
                {meta.title}
              </h1>
            ) : null}
          </div>

          {meta.backHref ? (
            <Button variant="outline" asChild>
              <a href={meta.backHref}>
                <ArrowLeft className="size-4" />
                {meta.backLabel}
              </a>
            </Button>
          ) : null}
        </header>

        {children}
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <Badge variant="secondary" className="rounded-full px-3 py-1 font-medium">
          Learning mode
        </Badge>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-normal tracking-[-0.05em] text-foreground sm:text-6xl">
            One site, two ways to build it.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            This version keeps the same portfolio structure, but the pages are
            assembled from React components and shadcn/ui primitives instead of
            hand-written HTML blocks.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        {homeLinks.map((link) => (
          <Card
            key={link.title}
            className="border-border/70 bg-background/92 shadow-none transition-colors hover:bg-secondary/40"
          >
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <CardTitle className="text-xl font-medium tracking-[-0.03em]">
                  {link.title}
                </CardTitle>
                <CardDescription className="mt-2 max-w-xl text-sm leading-6">
                  {link.description}
                </CardDescription>
              </div>
              <div className="sm:shrink-0">
                <Button variant="ghost" className="justify-between px-0 sm:px-3" asChild>
                  <a href={link.href}>
                    Open page
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <Card className="border-border/70 bg-background/92 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-medium tracking-[-0.03em]">
              <Layers3 className="size-4" />
              Same pages, different assembly
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="static" className="gap-4">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="static">Static</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="shadcn">shadcn</TabsTrigger>
              </TabsList>
              <TabsContent value="static" className="text-sm leading-7 text-muted-foreground">
                In the HTML/CSS version, each page is written directly in a
                file like `design.html` and styled with global classes.
              </TabsContent>
              <TabsContent value="react" className="text-sm leading-7 text-muted-foreground">
                In the React version, the page is composed from reusable blocks
                and fed by shared data instead of duplicated markup.
              </TabsContent>
              <TabsContent value="shadcn" className="text-sm leading-7 text-muted-foreground">
                shadcn/ui gives the React side reusable interface pieces:
                cards, buttons, tabs, dialogs, forms, and more.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-background/92 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-medium tracking-[-0.03em]">
              Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1">
            {socialLinks.map((link) => (
              <Button key={link.title} variant="ghost" className="justify-between" asChild>
                <a href={link.href}>
                  {link.title}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function RichCopy({ html, className = "" }) {
  return (
    <div
      className={`react-copy ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function AboutPage() {
  return (
    <Card className="border-border/70 bg-background/92 shadow-none">
      <CardHeader>
        <CardDescription>This page keeps the long-form article, but inside a React shell.</CardDescription>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ScanText className="size-5" />
          Long-form profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RichCopy html={copyBlocks.cv} />
      </CardContent>
    </Card>
  );
}

function DesignPage() {
  return (
    <section className="grid gap-5 md:grid-cols-2">
      {designProjects.map((project) => (
        <Card key={project.title} className="overflow-hidden border-border/70 bg-background/92 shadow-none">
          <a href={project.href}>
            <img src={project.image} alt={project.alt} className="react-gallery-image" />
          </a>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Brush className="size-5" />
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" className="w-full justify-between" asChild>
              <a href={project.href}>
                Open project
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

function MagazinePage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-background/92 shadow-none">
        <CardHeader>
          <CardDescription>Imported copy from the static editorial page.</CardDescription>
        </CardHeader>
        <CardContent>
          <RichCopy html={copyBlocks.magazine} />
        </CardContent>
      </Card>
      <section className="react-gallery-grid">
        {magazinePhotos.map((src, index) => (
          <Card key={src} className="overflow-hidden border-border/70 bg-background/92 p-0 shadow-none">
            <img
              src={src}
              alt={`Magazine spread ${index + 1}`}
              className="react-gallery-image"
            />
          </Card>
        ))}
      </section>
    </div>
  );
}

function MagazineCoverPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-background/92 shadow-none">
        <CardContent className="pt-6">
          <RichCopy html={copyBlocks["magazine-cover"]} />
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-border/70 bg-background/92 p-0 shadow-none">
        <img
          src="img/magazine/2-10.jpg"
          alt="Magazine cover"
          className="react-gallery-image"
        />
      </Card>
    </div>
  );
}

function ExperimentsPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
      <Card className="overflow-hidden border-border/70 bg-background/92 shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Code2 className="size-5" />
            ASCII experiment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="react-ascii" dangerouslySetInnerHTML={{ __html: copyBlocks.experiments }} />
        </CardContent>
      </Card>
      <Card className="border-border/70 bg-black text-white shadow-none">
        <CardHeader>
          <CardDescription className="text-white/60">Why keep this page</CardDescription>
          <CardTitle className="text-white">A nice demo of parity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6 text-white/70">
          <p>The static page is a plain HTML document.</p>
          <p>The React page wraps the same experiment in a componentized layout.</p>
          <p>That makes it easier to add controls, filters, or modal previews later.</p>
        </CardContent>
      </Card>
    </section>
  );
}

function PhotoHubPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-background/92 shadow-none">
        <CardContent className="pt-6">
          <RichCopy html={copyBlocks["photo-gallery"]} />
        </CardContent>
      </Card>
      <section className="grid gap-5 md:grid-cols-2">
        {photoBranches.map((branch) => (
          <Card key={branch.title} className="overflow-hidden border-border/70 bg-background/92 shadow-none">
            <a href={branch.href}>
              <img src={branch.image} alt={branch.alt} className="react-gallery-image" />
            </a>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Camera className="size-5" />
                {branch.title}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href={branch.href}>
                  Open gallery
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}

function PhotoGridPage({ photos, prefix }) {
  return (
    <section className="react-gallery-grid">
      {photos.map((src, index) => (
        <Card key={src} className="overflow-hidden border-border/70 bg-background/92 p-0 shadow-none">
          <img
            src={src}
            alt={`${prefix} ${index + 1}`}
            className="react-gallery-image"
          />
        </Card>
      ))}
    </section>
  );
}

export default function ReactSite({ page }) {
  let content = null;

  if (page === "index") {
    content = <HomePage />;
  } else if (page === "cv") {
    content = <AboutPage />;
  } else if (page === "design") {
    content = <DesignPage />;
  } else if (page === "magazine") {
    content = <MagazinePage />;
  } else if (page === "magazine-cover") {
    content = <MagazineCoverPage />;
  } else if (page === "experiments") {
    content = <ExperimentsPage />;
  } else if (page === "photo-gallery") {
    content = <PhotoHubPage />;
  } else if (page === "photo-gallery-bw") {
    content = <PhotoGridPage photos={bwPhotos} prefix="Black and white photo" />;
  } else if (page === "photo-gallery-clr") {
    content = <PhotoGridPage photos={colorPhotos} prefix="Color photo" />;
  }

  return <Shell page={page}>{content}</Shell>;
}
