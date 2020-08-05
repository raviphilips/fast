import { html, slotted, elements } from "@microsoft/fast-element";
import { Breadcrumb } from "./breadcrumb";

/**
 * The template for the {@link @microsoft/fast-foundation#Breadcrumb} component.
 * @public
 */
export const BreadcrumbTemplate = html<Breadcrumb>`
    <template
        role="navigation"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
    >
        <div role="list">
            <slot ${slotted({ property: "slottedBreadcrumbItems", filter: elements() })}
            </slot>
        </div>
    </template>
`;