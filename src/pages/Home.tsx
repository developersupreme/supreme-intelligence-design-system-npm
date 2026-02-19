import { Layout } from "@/app/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxHeader,
  ContentBoxTitle,
} from "@/components/ui/contentbox";
import { ArrowTrendingUpIcon, EnvelopeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { ToggleDemo } from "@/pages/toggle-demo";
import { Logo } from "@/components/ui/logo";
import { Footer } from "@/components";

import {
  PageLevel,
  PageLevelList,
  PageLevelItem,
} from "@/components/ui/page-level";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useNavigate } from "react-router-dom";
import { Persona, PersonaProfile } from "@/components/ui/persona";
import { AppIcon } from "@/components/ui/Icons/AppIcon";
import { AIIcon } from "@/components/ui/Icons/AIIcon";
import { AudiencesIcon } from "@/components/ui/Icons/AudiencesIcon";
import { BrandGuidelinesIcon } from "@/components/ui/Icons/BrandGuidelinesIcon";
import { DataSourcesIcon } from "@/components/ui/Icons/DataSourcesIcon";
import { DigitalAssetManagementIcon } from "@/components/ui/Icons/DigitalAssetManagementIcon";
import { GoogleIcon } from "@/components/ui/Icons/GoogleIcon";
import { HomeIcon } from "@/components/ui/Icons/HomeIcon";
import { KnowledgeBaseIcon } from "@/components/ui/Icons/KnowledgeBaseIcon";
import { LinkedInIcon } from "@/components/ui/Icons/LinkedInIcon";
import { PersonaIcon } from "@/components/ui/Icons/PersonaIcon";
import { SidebarIcon } from "@/components/ui/Icons/SidebarIcon";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import ToastDemo from "./toast-demo";
import {
  InfoCard,
  IconCard,
  MessageAngle,
  MessageCard,
  HighlightCard,
  HighlightCTACard,
  AnnouncementCard,
  HowItWorksCard,
  ContentTypeCard,
  SingleIconCard,
  CardWithProgress,
  CommonCard
} from "@/components/ui/card";
import BannerDemo from "./banner-demo";
import { RangeSlider, Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnalyticsIcon } from "@/components/ui/Icons/AnalyticsIcon";
import { SidebarSection } from "@/components/ui/sidebar";
import { Credits } from "@/components/ui/credits";
import { Quote } from "@/components/ui/quote";
import { CreditSelector } from "@/components/ui/credit-selector";
import DragDrop from "@/components/ui/drag-drop";
import { PageHeading } from "@/components/ui/page-heading";
import { Stepper } from "@/components/ui/stepper";
import { Briefcase, Target, Link2 } from "lucide-react";
import { Dropdown } from "@/components/ui/dropdown";
import { Favourite } from "@/components/ui/favourite";

const headerItems: {
  icon: React.ReactNode;
  label: string;
  href: string;
}[] = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      label: "Home",
      href: "/home",
    },
    {
      icon: <AIIcon className="w-5 h-5" />,
      label: "Curie AI Chat",
      href: "/curie-ai-chat-demo",
    },
    {
      icon: <AppIcon className="w-5 h-5" />,
      label: "Apps",
      href: "/apps",
    },
    {
      icon: <AnalyticsIcon className="w-5 h-5" />,
      label: "Analytics",
      href: "/analytics",
    },
  ];

const sidebarItems: SidebarSection[] = [
  {
    id: "main-menu",
    title: "",
    items: [
      {
        id: "home",
        label: "Home",
        icon: <HomeIcon className="w-6 h-6" />,
        isActive: location.pathname === "/",
        href: "/home",
      },
      {
        id: "curie-ai-chat",
        label: "Curie AI Chat",
        icon: <AIIcon className="w-6 h-6" />,
        isActive: location.pathname === "/curie-ai-chat-demo",
        href: "/curie-ai-chat-demo",
      },
      {
        id: "apps",
        label: "Apps",
        icon: <AppIcon className="w-6 h-6" />,
        isActive: location.pathname === "/apps",
        href: "/apps",
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: <AnalyticsIcon className="w-6 h-6" />,
        isActive: location.pathname === "/analytics",
        href: "/analytics",
      },
      {
        id: "digital-asset-management",
        label: "Digital Asset Management",
        icon: <DigitalAssetManagementIcon className="w-6 h-6" />,
        isActive: location.pathname === "/digital-asset-management",
        href: "/digital-asset-management",
      },
    ],
  },
  {
    id: "supreme-iq",
    title: "Supreme IQ",
    isCollapsible: true,
    items: [
      {
        id: "audiences",
        label: "Audiences",
        icon: <AudiencesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/audiences",
        href: "/audiences",
      },
      {
        id: "brand-guidelines",
        label: "Brand Guidelines",
        icon: <BrandGuidelinesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/brand-guidelines",
        href: "/brand-guidelines",
      },
      {
        id: "knowledge-base",
        label: "Knowledge Base",
        icon: <KnowledgeBaseIcon className="w-6 h-6" />,
        isActive: location.pathname === "/knowledge-base",
        href: "/knowledge-base",
      },
      {
        id: "data-sources",
        label: "Data Sources",
        icon: <DataSourcesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/data-sources",
        href: "/data-sources",
      },
    ],
  },
];

const Components = () => {
  const navigate = useNavigate();
  const [singleSliderValue, setSingleSliderValue] = useState([75]);
  const [rangeSliderValue, setRangeSliderValue] = useState<[number, number]>([
    25, 75,
  ]);

  useEffect(() => {
    // Add BugHerd script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.bugherd.com/sidebarv2.js?apikey=ljnm33lvqfgml4sr9fwffa";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src*="bugherd.com"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Layout headerItems={headerItems} sidebarItems={sidebarItems}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-4 md:py-8 px-4 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/")}
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button asChild variant="secondary" size="md">
                <Link to="/design-tokens">Design Tokens</Link>
              </Button>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">Design System Components</h1>
              <p className="text-base md:text-xl text-muted-foreground">
                A showcase of all available components
              </p>
            </div>
          </div>
          <Tabs
            defaultValue="InteractiveDynamicControls"
            className="w-full mx-auto"
          >
            <TabsList className="w-full flex-col sm:flex-row justify-between h-auto gap-1 sm:gap-0 p-1">
              <TabsTrigger
                value="InteractiveDynamicControls"
                className="w-full sm:w-1/3 whitespace-normal text-xs sm:text-sm py-2"
                variant="supreme-blue"
              >
                Interactive & Dynamic Controls
              </TabsTrigger>
              <TabsTrigger
                value="ContentOrganizationLayout"
                className="w-full sm:w-1/3 whitespace-normal text-xs sm:text-sm py-2"
                variant="supreme-blue"
              >
                Content Organization & Layout
              </TabsTrigger>
              <TabsTrigger
                value="VisualElementsIndicators"
                className="w-full sm:w-1/3 whitespace-normal text-xs sm:text-sm py-2"
                variant="supreme-blue"
              >
                Visual Elements & Indicators
              </TabsTrigger>
            </TabsList>
            <TabsContent value="InteractiveDynamicControls">
              <div className="flex flex-col gap-4 mt-4">
                {/* Buttons */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Buttons</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Button Matrix</ContentBoxTitle>
                      <ContentBoxDescription>
                        Comprehensive button variants, sizes, and states
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="space-y-8">
                      {/* Button States Matrix */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Button States & Variants
                        </h3>
                        <div className="overflow-x-auto w-full">
                          <table className="min-w-max w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-3 font-medium">
                                  Size
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Primary
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Secondary
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Secondary Color
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Link
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Icon Only
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Favourite
                                </th>
                                <th className="text-center p-3 font-medium">
                                  Outline
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-3 font-medium">Large</td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="primary"
                                    size="lg"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="secondary"
                                    size="lg"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="secondary-color"
                                    size="lg"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="link"
                                    size="lg"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    size="icon"
                                    showIcons="center"
                                  ></Button>
                                </td>
                                <td className="p-3 flex items-center justify-center">
                                  <Favourite active={true} size="lg" />
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="outline"
                                    size="lg"
                                  >
                                    Button
                                  </Button>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">Medium</td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="primary"
                                    size="md"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="secondary"
                                    size="md"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="secondary-color"
                                    size="md"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="link"
                                    size="md"
                                    showIcons="both"
                                  >
                                    Button
                                  </Button>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    size="icon-sm"
                                    showIcons="center"
                                  ></Button>
                                </td>
                                <td className="p-3 flex items-center justify-center">
                                  <Favourite size="md" />
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    variant="outline"
                                    size="md"
                                  >
                                    Button
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Toggle */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Toggle & Checkbox</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Toggle & Checkbox</ContentBoxTitle>
                      <ContentBoxDescription>
                        On/off state controls with different states and sizes
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <ToggleDemo />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Toast */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Toast</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Toast Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Toast messages for user feedback
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <ToastDemo />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Banner */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Banner</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Banner Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Banner component for displaying important messages
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <BannerDemo />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Table */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Table</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>
                        Enhanced Table Component
                      </ContentBoxTitle>
                      <ContentBoxDescription>
                        Table with filtering, pagination, and action buttons
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Click the link below to view the full table demo with
                          filtering and pagination:
                        </p>
                        <Button asChild variant="primary" size="md">
                          <Link to="/table-demo">View Table Demo</Link>
                        </Button>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Slider */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Slider</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Range Slider Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Interactive slider with Supreme Intelligence design
                        tokens
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Basic Slider */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Basic Slider
                            </h3>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                  Volume
                                </span>
                                <span className="text-supreme-blue-400 text-sm">
                                  {singleSliderValue[0]}%
                                </span>
                              </div>
                              <Slider
                                value={singleSliderValue}
                                onValueChange={setSingleSliderValue}
                                max={100}
                                step={1}
                                className="w-full"
                              />
                            </div>
                          </div>

                          {/* Range Slider */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Range Slider
                            </h3>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                  Price Range
                                </span>
                                <span className="text-supreme-blue-400 text-sm">
                                  ${rangeSliderValue[0]} - $
                                  {rangeSliderValue[1]}
                                </span>
                              </div>
                              <RangeSlider
                                value={rangeSliderValue}
                                onValueChange={(value) =>
                                  setRangeSliderValue(value as [number, number])
                                }
                                max={100}
                                step={5}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                          <h4 className="text-sm font-semibold text-card-foreground mb-3">
                            Component Features
                          </h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                              White circular handles with blue outline
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                              Blue progress bar from left to handle position
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                              Light gray track from handle to right edge
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                              Subtle shadows for depth and elevation
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                              Fully accessible with keyboard navigation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Input & Textarea */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Form Inputs</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>
                        Input & Textarea Components
                      </ContentBoxTitle>
                      <ContentBoxDescription>
                        Form input components with labels, hints, and validation
                        states
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="space-y-8">
                      {/* Input Demo */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">
                          Input Component
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Design Implementation */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-medium">
                              Design Implementation
                            </h4>
                            <Input
                              label="Title"
                              required
                              placeholder="Placeholder"
                              hint="This is a hint text to help user."
                              leftIcon={
                                <HomeIcon className="text-muted-foreground" />
                              }
                              rightIcon={
                                <HomeIcon className="text-muted-foreground" />
                              }
                            />
                          </div>

                          {/* Additional Examples */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-medium">
                              Additional Examples
                            </h4>
                            <div className="space-y-4">
                              <Input
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                hint="We'll never share your email with anyone else."
                                leftIcon={
                                  <EnvelopeIcon className="text-muted-foreground w-5 h-5" />
                                }
                              />
                              <Input
                                label="Search"
                                placeholder="Search..."
                                hint="Search for something..."
                                leftIcon={
                                  <MagnifyingGlassIcon className="text-muted-foreground w-5 h-5" />
                                }
                              />
                              <Input
                                label="With Error"
                                placeholder="This field has an error"
                                error="This field is required"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Textarea Demo */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">
                          Textarea Component
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="text-lg font-medium">
                              Basic Textarea
                            </h4>
                            <Textarea
                              label="Description"
                              placeholder="Enter your description here..."
                              hint="Provide a detailed description of your project."
                            />
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-medium">
                              With Error State
                            </h4>
                            <Textarea
                              label="Comments"
                              required
                              placeholder="Enter your comments..."
                              error="This field is required"
                            />
                          </div>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Progress */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Progress</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Progress Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <Progress value={50} />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Accordion */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Accordion</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Accordion Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Accordion component for displaying content in a
                        collapsible format
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            Accordion example lorem ipsum
                          </AccordionTrigger>
                          <AccordionContent>
                            Description Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed massa erat, faucibus vel eros
                            et, feugiat euismod erat. Aenean viverra
                            pellentesque nulla, at tempor libero laoreet id. Sed
                            faucibus magna sit am.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Page Level Navigation */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">
                    Page Level Navigation
                  </h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Page Level Indicators</ContentBoxTitle>
                      <ContentBoxDescription>
                        Hierarchical navigation indicators
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Basic Page Level
                          </h3>
                          <PageLevel level={1} />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Custom Text
                          </h3>
                          <PageLevel>Dashboard Overview</PageLevel>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Different Variants
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <PageLevel variant="default">
                              Default variant
                            </PageLevel>
                            <PageLevel variant="primary">
                              Primary variant
                            </PageLevel>
                            <PageLevel variant="secondary">
                              Secondary variant
                            </PageLevel>
                            <PageLevel variant="brand">Brand variant</PageLevel>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Arrow Positions
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <PageLevel arrowPosition="before">
                              Arrow before text
                            </PageLevel>
                            <PageLevel arrowPosition="after">
                              Arrow after text
                            </PageLevel>
                            <PageLevel showArrow={false}>No arrow</PageLevel>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Page Level List
                          </h3>
                          <PageLevelList>
                            <PageLevelItem>Home</PageLevelItem>
                            <PageLevelItem>Components</PageLevelItem>
                            <PageLevelItem active>Page Level</PageLevelItem>
                          </PageLevelList>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Custom Separator
                          </h3>
                          <PageLevel
                            separator={
                              <span className="text-muted-foreground">/</span>
                            }
                          >
                            Custom separator
                          </PageLevel>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="ContentOrganizationLayout">
              <div className="flex flex-col gap-4 mt-4">
                {/* Cards */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Cards</h2>
                  <ContentBox className="bg-neutral-100">
                    <ContentBoxHeader>
                      <ContentBoxTitle>Card Components</ContentBoxTitle>
                      <ContentBoxDescription>
                        Various card layouts and styles for different use cases.{" "}
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
                      {/* Message Angle */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Message Angle</h3>
                        <div className="max-w-md">
                          <MessageAngle
                            title="Diam nascetur lobortis nec"
                            description="Vulputate et id vulputate eget facilisis. Sed viverra eu quis viverra tincidunt nisi id ut sit fames eget."
                          />
                        </div>
                      </div>
                      {/* Info Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Info Card</h3>
                        <div className="max-w-md">
                          <InfoCard
                            subtitle="Risus pretium"
                            title="Lorem pharetra"
                            description="Diam nascetur lobortis nec"
                          />
                        </div>
                      </div>
                      {/* Card with Icon */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Card with Icon</h3>
                        <div className="max-w-md">
                          <IconCard
                            title="Diam nascetur lobortis nec"
                            value="99999"
                          />
                        </div>
                      </div>
                      {/* Highlight Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Highlight Card</h3>
                        <div className="max-w-2xl">
                          <HighlightCard
                            value="99"
                            title="Montes egestas mauris"
                            subtitle="Velit dui enim turpis tempor"
                          />
                        </div>
                      </div>
                      {/* Highlight CTA Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Highlight CTA Card
                        </h3>
                        <div className="max-w-sm">
                          <HighlightCTACard
                            title="Lorem ipsum dolor sit"
                            value="9999M"
                            description="Sapien orci id vitae justo elit sem dictums sed eu. Elementum hac volutpat amet."
                            ctaText="See More Details"
                            showAction={true}
                            onCtaClick={() => console.log("CTA clicked")}
                            className="bg-supreme-blue-50 "
                          />
                        </div>
                      </div>
                      {/* Card with Message */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Card with Message
                        </h3>
                        <div className="max-w-2xl">
                          <MessageCard
                            headerTitle="Risus pretium"
                            mainContent="Sapien orci id vitae justo elit sem dictumst sed eu. Elementum hac volutpat amet viverra commodo sociis elementum gravida sit. Felis sed nec tellus interdum neque fames imperdiet ac. Pellentesque integer sit nibh risus in arcu amet tempus. Interdum convallis morbi."
                            nestedTitle="Diam nascetur lobortis nec"
                            nestedContent="Vulputate et id vulputate eget facilisis. Sed viverra eu quis viverra tincidunt nisi id ut sit fames eget."
                          />
                        </div>
                      </div>
                      {/* Announcement Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Announcement Card
                        </h3>
                        <div className="max-w-2xl">
                          <AnnouncementCard
                            title="Sed mauris phasellus scelerisque"
                            author="By Team"
                            date="Month 1, 2025"
                            content={
                              "Sapien orci id vitae justo elit sem dictumst sed eu. Elementum hac volutpat amet viverra commodo sociis elementum gravida sit. Felis sed nec tellus interdum neque fames imperdiet ac. Pellentesque integer sit nibh risus in arcu amet tempus. Interdum convallis morbi."
                            }
                            badgeText="Badge"
                          />
                        </div>
                      </div>
                      {/* How It Works Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">How It Works Card</h3>
                        <div className="">
                          <HowItWorksCard
                            stepNumber={1}
                            title="Lorem ipsum dolor sit"
                            description="Sapien orci id vitae justo elit sem dictumst sed eu. Elementum hac volutpat amet viverra commodo sociis elementum gravida sit. Felis sed nec tellus interdum neque fames imperdiet ac. Pellentesque integer sit nibh risus in arcu amet tempus. Interdum convallis morbi."
                          />
                        </div>
                      </div>
                      {/* Content Type Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Content Type Card</h3>
                        <div className="max-w-2xl">
                          <ContentTypeCard
                            title="Title content here"
                            description="Description"
                          />
                        </div>
                      </div>
                      {/* Single Icon Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Single Icon Card</h3>
                        <div className="max-w-2xl">
                          <SingleIconCard
                            title="Persona Intelligence"
                            description="Automatic messaging customization for healthcare professionals, researchers, and life science personas"
                          />
                        </div>
                      </div>
                      {/* Card with Progress */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Card with Progress</h3>
                        <div className="max-w-2xl">
                          <CardWithProgress
                            title="Persona Intelligence"
                            description="Automatic messaging customization for healthcare professionals, researchers, and life science personas"
                            progressItems={[
                              { label: "Progress 1", value: 50 },
                              { label: "Progress 2", value: 30 },
                              { label: "Progress 3", value: 70 },
                            ]}
                          />
                        </div>
                      </div>
                      {/* Common Card */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Common Card</h3>
                        <div className="max-w-2xl">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl text-left">
                            <CommonCard title="Strategic Initiatives" description="Automatically identify key initiatives from news, filings, and public data" className='p-4 gap-2 rounded-lg' titleClassName="text-base" descriptionClassName="text-sm text-muted-foreground" icon={<Target className="h-5 w-5 text-primary" />} />
                            <CommonCard title="Capability Mapping" description="AI-powered alignment scoring between initiatives and your capabilities" className='p-4 gap-2 rounded-lg' titleClassName="text-base" descriptionClassName="text-sm text-muted-foreground" icon={<Link2 className="h-5 w-5 text-primary" />} />
                            <CommonCard title="Ready-to-Use Assets" description="Instantly match relevant case studies, whitepapers, and proof points" className='p-4 gap-2 rounded-lg' titleClassName="text-base" descriptionClassName="text-sm text-muted-foreground" badge='Coming Soon' disabled={true} icon={<Briefcase className="h-5 w-5 text-primary" />} />
                          </div>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Pagination Demo */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Pagination</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Pagination Showcase</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent className="w-full flex justify-center">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" isActive>
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">5</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">6</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">7</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">8</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">100</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="VisualElementsIndicators">
              <div className="flex flex-col gap-4 mt-4">
                {/* Icons */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Icons</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Custom Icons</ContentBoxTitle>
                      <ContentBoxDescription>
                        Rules: Only use the Outline style of Heroicons to ensure
                        consistency across all interfaces. All icons should use
                        a 1.5px stroke weight to align with our visual
                        standards. Then Custom Icons should be used for any
                        icons that are not part of the Heroicons library.
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="flex flex-wrap gap-4">
                      <AppIcon />
                      <AIIcon />
                      <AudiencesIcon />
                      <BrandGuidelinesIcon />
                      <DataSourcesIcon />
                      <DigitalAssetManagementIcon />
                      <GoogleIcon />
                      <HomeIcon />
                      <KnowledgeBaseIcon />
                      <LinkedInIcon />
                      <PersonaIcon />
                      <SidebarIcon />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Persona */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Persona</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Persona Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        User profile images and fallbacks
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="flex flex-col gap-4">
                      <Persona
                        variant="default"
                        showLeftIcon
                        showRightIcon
                        personas={["John Doe", "Jane Smith"]}
                      />
                      <PersonaProfile
                        variant="default"
                        avatar={<Avatar src="/assets/defaultAvatar.jpg" alt="Default Avatar" fallback="DA" />}
                        name="John Doe"
                        title="Software Engineer"
                        organization="Google"
                        tags={["JavaScript", "React", "Node.js"]}
                      />
                      <PersonaProfile
                        variant="default"
                        avatarFallback="JS"
                        name="Jane Smith"
                        title="Product Manager"
                        organization="Apple"
                        tags={["Product Management", "Agile", "Scrum"]}
                      />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Logo */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Logo</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Brand Logos</ContentBoxTitle>
                      <ContentBoxDescription>
                        Different logo variants and themes
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="space-y-4 bg-slate-400 p-4 md:p-8 rounded-lg">
                      <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <Logo variant="curie" size="sm" />
                        <Logo variant="curie" size="sm" showText={false} />
                        <Logo variant="supreme" size="sm" />
                        <Logo variant="supreme" size="sm" showText={false} />
                      </div>
                      <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <Logo variant="curie" size="md" theme="black" />
                        <Logo
                          variant="curie"
                          size="md"
                          showText={false}
                          theme="black"
                        />
                        <Logo variant="supreme" size="md" theme="black" />
                        <Logo
                          variant="supreme"
                          size="md"
                          showText={false}
                          theme="black"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <Logo variant="curie" size="lg" theme="white" />
                        <Logo
                          variant="curie"
                          size="lg"
                          showText={false}
                          theme="white"
                        />
                        <Logo variant="supreme" size="lg" theme="white" />
                        <Logo
                          variant="supreme"
                          size="lg"
                          showText={false}
                          theme="white"
                        />
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Badges */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Badges</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Badge Variants</ContentBoxTitle>
                      <ContentBoxDescription>
                        Status indicators and labels
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-4">
                        <Badge variant="default" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="foundation" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="red" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="orange" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="yellow" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="lime" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="blue" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="indigo" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="purple" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="pink" dismissible dot>
                          Badge
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Badge variant="default" dismissible dot>
                          Badge
                        </Badge>
                        <Badge variant="default">Badge</Badge>
                        <Badge variant="default" dot>
                          Badge
                        </Badge>
                        <Badge variant="default" dismissible>
                          Badge
                        </Badge>
                        <Credits value={100} />
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Avatars */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Avatars</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Avatar Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        User profile images and fallbacks
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="space-y-8">
                      {/* Single Avatars */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Single Avatars</h3>

                        {/* Photo Row */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            Photo
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="sm"
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                                fallback="DA"
                              />
                              <span className="text-xs text-muted-foreground">
                                Small
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="md"
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                                fallback="DA"
                              />
                              <span className="text-xs text-muted-foreground">
                                Mid
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="lg"
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                                fallback="DA"
                              />
                              <span className="text-xs text-muted-foreground">
                                Large
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Initials Row */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            Initials
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="sm"
                                fallback="AA"
                                className="bg-[#4136D4]  text-primary-foreground"
                              />
                              <span className="text-xs text-muted-foreground">
                                Small
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="md"
                                fallback="AA"
                                className="bg-[#4136D4] text-primary-foreground"
                              />
                              <span className="text-xs text-muted-foreground">
                                Mid
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <Avatar
                                size="lg"
                                fallback="AA"
                                className="bg-[#4136D4] text-primary-foreground"
                              />
                              <span className="text-xs text-muted-foreground">
                                Large
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Group Avatars */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Group Avatars</h3>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            Groups
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                              <AvatarGroup size="sm">
                                {[...Array(5)].map((_, i) => (
                                  <Avatar
                                    key={i}
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                    fallback="DA"
                                  />
                                ))}
                              </AvatarGroup>
                              <span className="text-xs text-muted-foreground">
                                Small
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <AvatarGroup size="md">
                                {[...Array(5)].map((_, i) => (
                                  <Avatar
                                    key={i}
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                    fallback="DA"
                                  />
                                ))}
                              </AvatarGroup>
                              <span className="text-xs text-muted-foreground">
                                Mid
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <AvatarGroup size="lg">
                                {[...Array(5)].map((_, i) => (
                                  <Avatar
                                    key={i}
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                    fallback="DA"
                                  />
                                ))}
                              </AvatarGroup>
                              <span className="text-xs text-muted-foreground">
                                Large
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Tooltip */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semibold">Tooltip</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Tooltip Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Tooltip component for displaying content in a
                        collapsible format
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent className="flex flex-wrap gap-4">
                      <Tooltip>
                        <TooltipTrigger>Top</TooltipTrigger>
                        <TooltipContent arrowDirection="top">
                          Add to library
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>Bottom</TooltipTrigger>
                        <TooltipContent arrowDirection="bottom">
                          Add to library
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>Left</TooltipTrigger>
                        <TooltipContent arrowDirection="left">
                          Add to library
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>Right</TooltipTrigger>
                        <TooltipContent arrowDirection="right">
                          Add to library
                        </TooltipContent>
                      </Tooltip>
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Quotes */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Quotes</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Quote Component</ContentBoxTitle>
                      <ContentBoxDescription>
                        Quote component for displaying quotes
                      </ContentBoxDescription>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <Quote avatar={<Avatar src="/assets/defaultAvatar.jpg" alt="Default Avatar" fallback="DA" />} quote="Supreme Intelligence is a one-of-a-kind platform that leverages Supreme's decade long experience in life science marketing with millions of proprietary data points and industry benchmarks. Our R&D team leverages advanced AI/ML techniques, achieving over 90% correlation with our Ph.D. scientific marketers to bring you accurate, powerful, and truly data-backed insights to scale your growth." authorName="Sheldon Zhai" authorTitle="Head of Technology & AI" />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* Credit Selector */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Credit Selector</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Credit Selector Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <CreditSelector options={[{ id: "1", label: "100 Credits", credits: 100 }, { id: "2", label: "200 Credits", credits: 200 }, { id: "3", label: "300 Credits", credits: 300 }]} />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/*drag and drop*/}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Drag and Drop</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Drag and Drop Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <DragDrop onFiles={(files) => console.log(files)}
                        accept=".pdf,.doc,.docx,.txt"
                        iconSize={48}
                        multiple />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* page-heading */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Page Heading</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Page Heading Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <PageHeading heading="Heading Example" description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa erat, faucibus vel eros et, feugiat euismod erat. Aenean viverra pellentesque nulla, at tempor libero laoreet id. Sed faucibus magna sit am." />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* stepper */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Stepper</h2>
                  <ContentBox className="">
                    <ContentBoxHeader>
                      <ContentBoxTitle>Stepper Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <Stepper
                        steps={[
                          { title: "Platform", step: "done" },
                          { title: "Basics", step: "done" },
                          { title: "Connect", step: "active" },
                          { title: "Review", step: "default" },
                        ]}
                      />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
                {/* dropdown */}
                <section className="space-y-2">
                  <h2 className="text-xl md:text-3xl font-semold">Dropdown</h2>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxTitle>Dropdown Component</ContentBoxTitle>
                    </ContentBoxHeader>
                    <ContentBoxContent>
                      <Dropdown className="w-full" options={[{ id: "1", label: "Option 1" }, { id: "2", label: "Option 2" }, { id: "3", label: "Option 3" }]} searchable={false} />
                    </ContentBoxContent>
                  </ContentBox>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Components;
