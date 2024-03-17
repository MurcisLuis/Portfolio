// Archivo: GroupContent.tsx
import { ContentSection, type ContentSectionProps } from "./ContentSection";
import { Slot, component$ } from '@builder.io/qwik';

export const GroupContent = component$<ContentSectionProps>((props) => {
  return (
    <ContentSection
      {...props.colSpan && { colSpan: props.colSpan }}
      {...props.mdColSpan && { mdColSpan: props.mdColSpan }}
      class={`group ${props.class}`}
    >
      <Slot />
    </ContentSection>
  );
});
