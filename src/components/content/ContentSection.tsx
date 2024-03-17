// Archivo: ContentSection.tsx
import { Slot, component$ } from '@builder.io/qwik';
//En qwik las propiedades se definen en interfaces
export interface ContentSectionProps {
  colSpan?: number;
  mdColSpan?: number;
  class?: string;  
}
//Este metodo se encarga de juntar las clases en una
export const ContentSection = component$<ContentSectionProps>((props) => {
  const colSpanClass = props.colSpan ? `col-span-${props.colSpan}` : '';
  const mdColSpanClass = props.mdColSpan ? `md:col-span-${props.mdColSpan}` : '';
  const customClass = props.class ? props.class : '';

  const combinedClasses = `${colSpanClass} ${mdColSpanClass} ${customClass}`.trim().replace('  ',' ');

  return (
    <section class={combinedClasses}>
      {/*In react use props.children https://qwik.dev/docs/components/slots/*/}
      <Slot />
    </section>
  );
});
