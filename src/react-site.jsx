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
  index: { title: "Home", eyebrow: "Entry point", backHref: null, backLabel: null },
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
    backLabel: "Back to archive"
  }
};

function ArchitectureSwitch({ page }) {
  return (
    <div className="sticky top-4 z-40 mb-8 flex justify-end">
      <div className="inline-flex gap-2 rounded-full border border-border/80 bg-background/88 p-2 shadow-[0_18px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur">
        <Button variant="ghost" size="sm" asChild>
          <a href={staticPageMap[page]}>HTML/CSS</a>
        </Button>
        <Button size="sm">React + shadcn</Button>
      </div>
    </div>
  );
}

function Shell({ page, children }) {
  const meta = pageMeta[page];

  return (
    <main className="ui-kit-page min-h-screen px-5 py-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <ArchitectureSwitch page={page} />

        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <a
              href={reactPageMap.index}
              className="text-xs uppercase tracking-[0.32em] text-muted-foreground transition-colors hover:text-foreground"
            >
              evgeny chekov
            </a>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {meta.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {meta.title}
              </h1>
            </div>
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
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
        <Card className="rounded-[2rem] border-border/70 bg-background/94 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.45)]">
          <CardHeader className="space-y-5 p-8 sm:p-10">
            <Badge variant="secondary" className="w-fit rounded-full px-4 py-1">
              Learning mode
            </Badge>
            <CardTitle className="max-w-3xl text-4xl leading-none tracking-[-0.06em] sm:text-6xl">
              One portfolio, two architectures.
            </CardTitle>
            <CardDescription className="max-w-2xl text-base leading-7">
              This React version mirrors the static site, but its screens are
              assembled from reusable components with shadcn/ui.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 sm:p-10 sm:pt-0">
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={reactPageMap.design}>
                  Open React version
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={staticPageMap.index}>Compare with static HTML</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black text-white">
          <CardHeader>
            <CardDescription className="text-white/60">
              Why this matters
            </CardDescription>
            <CardTitle className="text-white">What changes in React</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-white/72">
            <p>Pages become components and data instead of duplicated HTML fragments.</p>
            <p>Navigation, cards, dialogs, and controls can be reused across multiple screens.</p>
            <p>shadcn/ui gives you styled building blocks while you keep full control of the code.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {homeLinks.map((link) => (
          <Card key={link.title} className="border-border/70 bg-background/88">
            <CardHeader>
              <CardTitle className="text-xl tracking-[-0.03em]">{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href={link.href}>
                  Open page
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
        <Card className="border-border/70 bg-background/90">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers3 className="size-5" />
              Same destination, different construction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="static" className="gap-5">
              <TabsList>
                <TabsTrigger value="static">Static</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="shadcn">shadcn/ui</TabsTrigger>
              </TabsList>
              <TabsContent value="static" className="text-sm leading-7 text-muted-foreground">
                In the HTML/CSS version, each page is written directly as markup and styled with CSS classes.
              </TabsContent>
              <TabsContent value="react" className="text-sm leading-7 text-muted-foreground">
                In the React version, the page is generated from components and data arrays instead of repeated blocks.
              </TabsContent>
              <TabsContent value="shadcn" className="text-sm leading-7 text-muted-foreground">
                shadcn/ui sits on the React side and gives you reusable controls like buttons, cards, tabs, sheets, and forms.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-background/90">
          <CardHeader>
            <CardTitle className="text-2xl">Contacts</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {socialLinks.map((link) => (
              <Button key={link.title} variant="ghost" className="justify-between" asChild>
                <a href={link.href} target="_blank" rel="noreferrer">
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
    <Card className="border-border/70 bg-background/92">
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
        <Card key={project.title} className="overflow-hidden border-border/70 bg-background/92">
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
      <Card className="border-border/70 bg-background/92">
        <CardHeader>
          <CardDescription>Imported copy from the static editorial page.</CardDescription>
        </CardHeader>
        <CardContent>
          <RichCopy html={copyBlocks.magazine} />
        </CardContent>
      </Card>
      <section className="react-gallery-grid">
        {magazinePhotos.map((src, index) => (
          <Card key={src} className="overflow-hidden border-border/70 bg-background/92 p-0">
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
      <Card className="border-border/70 bg-background/92">
        <CardContent className="pt-6">
          <RichCopy html={copyBlocks["magazine-cover"]} />
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-border/70 bg-background/92 p-0">
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
      <Card className="overflow-hidden border-border/70 bg-background/92">
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
      <Card className="border-border/70 bg-black text-white">
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
      <Card className="border-border/70 bg-background/92">
        <CardContent className="pt-6">
          <RichCopy html={copyBlocks["photo-gallery"]} />
        </CardContent>
      </Card>
      <section className="grid gap-5 md:grid-cols-2">
        {photoBranches.map((branch) => (
          <Card key={branch.title} className="overflow-hidden border-border/70 bg-background/92">
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
        <Card key={src} className="overflow-hidden border-border/70 bg-background/92 p-0">
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
