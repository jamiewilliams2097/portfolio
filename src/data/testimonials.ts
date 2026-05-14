export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  projectSlug?: string;
};

// TODO: replace with real client testimonials before publishing.
// Component is empty-state safe — if this array is empty, the section will not render on the homepage.
export const testimonials: Testimonial[] = [];
