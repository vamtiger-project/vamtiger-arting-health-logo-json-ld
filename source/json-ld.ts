const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'Logo',
    name: 'Arting Health',
    description: 'Arting Health Logo',
    datePublished: '05 June 2019',
    image: 'https://unpkg.com/vamtiger-arting-health-logo-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    creator: [
        {
            '@type': 'Organization',
            name: 'Infers Group',
            url: 'http://artinghealth.infersgroup.com',
            email: 'info(at)infersgroup.com'
        }
    ],
    funder: {
        '@type': 'Organization',
        name: 'Welcome',
        url: 'https://wellcome.ac.uk'
    }
};

export default [
    jsonLd
];
