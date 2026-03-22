import { useState } from "react";
import {
  ArrowRight,
  Blocks,
  Layers3,
  PanelRightOpen,
  Send,
  Sparkles
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const features = [
  {
    icon: Layers3,
    title: "Ready for components",
    description:
      "The project can now host shadcn/ui primitives in src/components/ui and reuse them across new pages."
  },
  {
    icon: Sparkles,
    title: "Tailwind tokens wired",
    description:
      "Theme variables, aliases, and utility helpers are configured so new shadcn components can be added without extra setup."
  },
  {
    icon: Blocks,
    title: "Static site preserved",
    description:
      "Existing HTML pages still work, while React is available for islands or dedicated interactive screens."
  }
];

const contactSchema = z.object({
  name: z.string().min(2, "Add at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(12, "Tell a little more about the project.")
});

export default function UiKitDemo() {
  const [lastSubmission, setLastSubmission] = useState(null);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(values) {
    setLastSubmission(values);
  }

  return (
    <main className="ui-kit-page px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="/index.html"
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            evgeny chekov
          </a>
          <div className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground backdrop-blur">
            shadcn/ui connected
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[2rem] border border-border/70 bg-background/92 p-8 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.45)] backdrop-blur sm:p-12">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Editorial component system
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
              shadcn/ui is now wired into this Vite portfolio.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I kept the static structure intact and added a React-powered entry
              point for shadcn components, so we can build richer sections
              without refactoring the whole site first.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    Preview dialog
                    <ArrowRight className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Creative brief</DialogTitle>
                    <DialogDescription>
                      Dialog is ready for confirmations, project notes, or quick
                      focused flows inside the portfolio.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="dialog-title">Project</Label>
                      <Input
                        id="dialog-title"
                        defaultValue="Editorial redesign"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="dialog-summary">Direction</Label>
                      <Textarea
                        id="dialog-summary"
                        defaultValue="Minimal, image-led, with a cleaner interactive layer for case studies."
                      />
                    </div>
                  </div>
                  <DialogFooter showCloseButton>
                    <Button>Save brief</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg">
                    Open sheet
                    <PanelRightOpen className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Installed components</SheetTitle>
                    <SheetDescription>
                      The project now includes `button`, `card`, `dialog`,
                      `sheet`, `tabs`, `input`, `textarea`, and `label`.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-3 px-4 text-sm text-muted-foreground">
                    <div className="rounded-lg border border-border bg-secondary/50 p-3">
                      React + Vite are wired without replacing the existing HTML
                      pages.
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 p-3">
                      Tailwind tokens and `@/` aliases are ready for additional
                      shadcn components.
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 p-3">
                      You can now compose new sections from reusable UI blocks
                      instead of hand-styling each screen.
                    </div>
                  </div>
                  <SheetFooter>
                    <Button asChild>
                      <a
                        href="https://ui.shadcn.com/docs/components/button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open shadcn docs
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <Button variant="ghost" size="lg" asChild>
                <a href="/design.html">Back to portfolio pages</a>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-black/10 bg-white/88 backdrop-blur">
            <CardHeader className="border-b border-border/80 pb-5">
              <CardDescription>First installed primitives</CardDescription>
              <CardTitle className="text-2xl tracking-[-0.03em]">
                Button + Card + Tabs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <Tabs defaultValue="stack" className="gap-4">
                <TabsList className="w-full">
                  <TabsTrigger value="stack">Stack</TabsTrigger>
                  <TabsTrigger value="workflow">Workflow</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                </TabsList>
                <TabsContent value="stack" className="space-y-3">
                  <div className="rounded-lg border border-border bg-secondary/40 p-4 text-sm leading-6 text-muted-foreground">
                    React entry point, Tailwind v4 tokens, `cn()` helper, and
                    reusable UI primitives are all in place.
                  </div>
                </TabsContent>
                <TabsContent value="workflow" className="space-y-3">
                  <div className="grid gap-3">
                    <Button className="w-full justify-between">
                      Primary action
                      <ArrowRight className="size-4" />
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Secondary action
                    </Button>
                    <Button variant="outline" className="w-full">
                      Outline action
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="usage">
                  <p className="text-sm leading-6 text-muted-foreground">
                    New components can now be added into
                    <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 text-xs">
                      src/components/ui
                    </code>
                    and imported through the
                    <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 text-xs">
                      @/
                    </code>
                    alias.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t border-border/80 text-sm text-muted-foreground">
              Ready for dialogs, sheets, forms, tabs, and more.
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
          <Card className="border-border/80 bg-background/88 shadow-[0_20px_80px_-56px_rgba(0,0,0,0.5)] backdrop-blur">
            <CardHeader>
              <CardDescription>Form primitives</CardDescription>
              <CardTitle className="text-2xl tracking-[-0.03em]">
                Contact-style form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Evgeny Chekov"
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The label, input, and validation message are wired
                          through shadcn form helpers.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="hello@example.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about the project, timeline, and visual direction."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit">
                      Send
                      <Send className="size-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="justify-between gap-3 border-t border-border/80">
              <span className="text-sm text-muted-foreground">
                {lastSubmission
                  ? `Ready to send: ${lastSubmission.name} / ${lastSubmission.email}`
                  : "Validated inputs are ready for real forms or CMS-driven contact blocks."}
              </span>
            </CardFooter>
          </Card>

          <Card className="border-border/80 bg-black text-white shadow-[0_28px_100px_-60px_rgba(0,0,0,0.85)]">
            <CardHeader>
              <CardDescription className="text-white/60">
                What changed
              </CardDescription>
              <CardTitle className="text-2xl tracking-[-0.03em] text-white">
                A practical starter kit for the next screens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-white/70">
              <p>
                The site can stay mostly static where it makes sense, while new
                interactive pages can use the same component vocabulary.
              </p>
              <p>
                This is a good foundation for filters, popovers, case study
                drawers, contact flows, or richer portfolio presentations.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" asChild>
                <a
                  href="https://ui.shadcn.com/docs/components"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse component catalog
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-border/80 bg-background/88 shadow-[0_20px_80px_-56px_rgba(0,0,0,0.5)] backdrop-blur"
            >
              <CardHeader>
                <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-border bg-secondary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
