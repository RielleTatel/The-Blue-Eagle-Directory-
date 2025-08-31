import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { organizationCategories } from "../../types/organization";

interface SelectOrgsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const SelectOrgs: React.FC<SelectOrgsProps> = ({ selectedCategory, onCategoryChange }) => (
  <Select.Root value={selectedCategory} onValueChange={onCategoryChange}>
    <Select.Trigger className="flex h-10 w-full sm:w-40 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Organization Categories">
      <Select.Value placeholder="Filter by Category" />
      <Select.Icon className="h-4 w-4 opacity-50">
        <ChevronDown />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        <Select.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
          <ChevronUp />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-1">
          <Select.Group>
            <Select.Label className="py-1.5 pl-8 pr-2 text-sm font-semibold"> Categories </Select.Label>
            {organizationCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.displayName}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
          <ChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

/* ✅ Strongly typed SelectItem */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, ref) => (
  <Select.Item 
    ref={ref} 
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )} 
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Select.ItemIndicator>
        <Check className="h-4 w-4" />
      </Select.ItemIndicator>
    </span>
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";

export default SelectOrgs;
