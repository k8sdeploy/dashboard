import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.tsx";
import {cn} from "@/lib/utils.ts";
import React from "react";

const namespaces: { title: string; sanitizedTitle: string; deployments: number }[] = [
  {
    title: "K8sDeploy",
    sanitizedTitle: "k8sdeploy",
    deployments: 2,
  },
  {
    title: "ChewedFeed",
    sanitizedTitle: "chewedfeed",
    deployments: 1,
  },
]

export function DashboardMenu() {
  return (
    <NavigationMenu className={"mt-4 border rounded-md w-full"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/deployments" title="Deployments">
                All the deployments
              </ListItem>
              <ListItem href="/agents" title="Agents">
                Get the list of all the agents in the account
              </ListItem>
              <ListItem href="/users" title="Users">
                Get the list of all the users in the account
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Namespaces</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {namespaces.map((namespace) => (
                <ListItem
                  key={namespace.title}
                  title={namespace.title}
                  href={`/namespace/${namespace.sanitizedTitle}`}
                >
                  {namespace.title} : {namespace.deployments}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
