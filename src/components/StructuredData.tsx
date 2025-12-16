interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[]; // Social media URLs
}

export function OrganizationSchema({
  name,
  description,
  url,
  logo,
  contactEmail,
  contactPhone,
  address,
  sameAs,
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    ...(logo && { logo }),
    ...(contactEmail && {
      contactPoint: {
        '@type': 'ContactPoint',
        email: contactEmail,
        ...(contactPhone && { telephone: contactPhone }),
        contactType: 'Customer Service',
      },
    }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(sameAs && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    ...(areaServed && { areaServed }),
    ...(serviceType && { serviceType }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
