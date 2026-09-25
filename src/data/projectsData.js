export const PROJECTS_DATA = [
  {
    id: '01',
    num: '01',
    title: 'PROPOSED RENOVATION OF EXISTING BUNGALOW HOUSE',
    location: 'Grand Royale Subd., Malolos, Bulacan',
    duration: '180 days',
    cost: '₱3,900,000',
    category: 'Renovation & Build',
    featured: true,
    renderImage: '/assets/projects/p1-render.jpg',
    planImage: '/assets/projects/p1-plan.jpg',
    images: [
      { url: '/assets/projects/p1-render.jpg', caption: 'Exterior Architectural Perspective' },
      { url: '/assets/projects/p1-plan.jpg', caption: 'Architectural Floor Plans (Existing, Ground & Second Level)' }
    ],
    details: [
      { label: 'Project Type', value: 'Residential Renovation & Addition' },
      { label: 'Location', value: 'Grand Royale Subd., Malolos, Bulacan' },
      { label: 'Project Duration', value: '180 days' },
      { label: 'Project Cost', value: '₱3,900,000' }
    ]
  },
  {
    id: '02',
    num: '02',
    title: 'PROPOSED FENCE, GATE AND KITCHEN EXTENSION',
    location: 'Grand Royale Subd., Malolos, Bulacan',
    duration: '60 days',
    cost: '₱550,000',
    category: 'Extension & Build',
    featured: false,
    renderImage: '/assets/projects/p2-render.jpg',
    planImage: '/assets/projects/p2-plan.jpg',
    images: [
      { url: '/assets/projects/p2-render.jpg', caption: 'Proposed Architectural Rendering' },
      { url: '/assets/projects/p2-photo.jpg', caption: 'As-Built Construction & Gate Installation' },
      { url: '/assets/projects/p2-plan.jpg', caption: 'Ground & Second Floor Extension Plan' }
    ],
    details: [
      { label: 'Project Type', value: 'Kitchen Extension, Custom Gate & Perimeter Fence' },
      { label: 'Location', value: 'Grand Royale Subd., Malolos, Bulacan' },
      { label: 'Project Duration', value: '60 days' },
      { label: 'Project Cost', value: '₱550,000' }
    ]
  },
  {
    id: '03',
    num: '03',
    title: 'PROPOSED FENCE, GATE AND GARAGE ROOF',
    location: 'La Residencia, Malolos, Bulacan',
    duration: '50 days',
    cost: '₱324,000',
    category: 'Extension & Build',
    featured: false,
    renderImage: '/assets/projects/p3-render.jpg',
    planImage: '/assets/projects/p3-plan.jpg',
    images: [
      { url: '/assets/projects/p3-render.jpg', caption: 'Proposed Architectural 3D Visualization' },
      { url: '/assets/projects/p3-photo-top.jpg', caption: 'Completed Build — Actual Photo' },
      { url: '/assets/projects/p3-plan.jpg', caption: 'Site & Architectural Layout' }
    ],
    details: [
      { label: 'Project Type', value: 'Perimeter Fence, Gate & Garage Canopy Structure' },
      { label: 'Location', value: 'La Residencia, Malolos, Bulacan' },
      { label: 'Project Duration', value: '50 days' },
      { label: 'Project Cost', value: '₱324,000' }
    ]
  },
  {
    id: '04',
    num: '04',
    title: 'DESIGN FOR 2 STOREY RESIDENTIAL WITH ROOF DECK AND COMMERCIAL SPACE',
    location: 'Zamboanga City, Zamboanga',
    duration: null,
    cost: '₱45,000 (Design Fee)',
    fee: '₱45,000',
    category: 'Architectural Design',
    featured: true,
    renderImage: '/assets/projects/p4-render.jpg',
    planImage: '/assets/projects/p4-plan.jpg',
    images: [
      { url: '/assets/projects/p4-render.jpg', caption: 'Architectural Dusk Rendering with Ground Commercial Unit' },
      { url: '/assets/projects/p4-plan.jpg', caption: 'Complete Floor Plans: Ground, Second Level & Roof Deck' }
    ],
    details: [
      { label: 'Project Scope', value: 'Full Architectural Design' },
      { label: 'Building Classification', value: '2-Storey Mixed-Use (Residential + Commercial + Roof Deck)' },
      { label: 'Location', value: 'Zamboanga City, Zamboanga' },
      { label: 'Design Fee', value: '₱45,000' }
    ]
  },
  {
    id: '05',
    num: '05',
    title: 'DESIGN FOR 3 BEDROOM BUNGALOW HOUSE',
    location: 'Cauayan City, Isabela',
    duration: null,
    cost: '₱27,000 (Design Fee)',
    fee: '₱27,000',
    category: 'Architectural Design',
    featured: false,
    renderImage: '/assets/projects/p5-render.jpg',
    planImage: '/assets/projects/p5-plan.jpg',
    images: [
      { url: '/assets/projects/p5-render.jpg', caption: 'Exterior Perspective with Spiral Stair & Roof Terrace' },
      { url: '/assets/projects/p5-plan.jpg', caption: 'Ground Floor Plan & Roof Structural Layout' }
    ],
    details: [
      { label: 'Project Scope', value: 'Architectural Design & Planning' },
      { label: 'Typology', value: '3-Bedroom Bungalow with Accessible Roof Deck' },
      { label: 'Location', value: 'Cauayan City, Isabela' },
      { label: 'Design Fee', value: '₱27,000' }
    ]
  },
  {
    id: '06',
    num: '06',
    title: 'DESIGN FOR FENCE, GATE AND HOUSE EXTENSION',
    location: 'Bria Homes, Plaridel, Bulacan',
    duration: null,
    cost: '₱21,000 (Design Fee)',
    fee: '₱21,000',
    category: 'Architectural Design',
    featured: false,
    renderImage: '/assets/projects/p6-render.jpg',
    planImage: '/assets/projects/p6-plan.jpg',
    images: [
      { url: '/assets/projects/p6-render.jpg', caption: 'Modern Facade Extension & Perimeter Wall Visualization' },
      { url: '/assets/projects/p6-plan.jpg', caption: 'Ground & Second Floor Extension Architectural Blueprints' }
    ],
    details: [
      { label: 'Project Scope', value: 'Architectural Design' },
      { label: 'Scope Items', value: 'House Extension, Perimeter Fence & Custom Gate' },
      { label: 'Location', value: 'Bria Homes, Plaridel, Bulacan' },
      { label: 'Design Fee', value: '₱21,000' }
    ]
  }
];

export const SERVICES_DATA = [
  {
    num: '01',
    title: 'Architectural Design',
    summary: 'Comprehensive conceptual and technical architectural planning, from initial schematic sketches to permit-ready blueprints.',
    deliverables: ['Schematic Concepts', 'Technical Blueprints', 'Permit Documents', '3D Visualizations']
  },
  {
    num: '02',
    title: 'Residential Design',
    summary: 'Custom residential planning tailored around how you live, maximizing spatial efficiency, natural ventilation, and daylight.',
    deliverables: ['Custom Homes', 'Multi-Level Dwellings', 'Roof Deck Integration', 'Interior Layouts']
  },
  {
    num: '03',
    title: 'Renovation',
    summary: 'Transforming existing structures through surgical architectural redesign, structural upgrades, and modern spatial conversions.',
    deliverables: ['Full Structural Conversions', 'Bungalow-to-Two-Storey Upgrades', 'Facade Modernization', 'Spatial Reconfiguration']
  },
  {
    num: '04',
    title: 'House Extensions',
    summary: 'Expanding living areas, modern kitchen additions, second-floor additions, and outdoor utility zones with seamless structural integration.',
    deliverables: ['Kitchen Extensions', 'Second Floor Additions', 'Utility & Service Zones', 'Balcony & Terraces']
  },
  {
    num: '05',
    title: 'Fence & Gate Design',
    summary: 'Custom perimeter security solutions, steel gate designs, architectural boundary walls, and integrated garage roof structures.',
    deliverables: ['Custom Metal Gates', 'Architectural Perimeter Walls', 'Garage Roof Canopies', 'Integrated Lighting & Hardware']
  },
  {
    num: '06',
    title: 'Construction / Build',
    summary: 'End-to-end design-build execution with strict project timelines, transparent cost tracking, and precise on-site supervision.',
    deliverables: ['Turnkey Construction', 'Site Supervision', 'Material Specification', 'Project Milestone Delivery']
  }
];

export const PROCESS_DATA = [
  {
    step: '01',
    name: 'CONSULT',
    description: 'Understanding the project, requirements, and site.',
    detail: 'We begin with an in-depth dialogue to identify your lifestyle, functional needs, budget parameters, and physical site conditions.'
  },
  {
    step: '02',
    name: 'DESIGN',
    description: 'Developing the architectural concept and design direction.',
    detail: 'Translating project requirements into schematic floor plans, spatial volumes, and photorealistic 3D architectural perspectives.'
  },
  {
    step: '03',
    name: 'PLAN',
    description: 'Refining drawings, materials, scope, and project requirements.',
    detail: 'Finalizing technical blueprints, structural coordinates, construction schedule, and transparent cost estimates.'
  },
  {
    step: '04',
    name: 'BUILD',
    description: 'Turning the approved design into a finished space.',
    detail: 'Mobilizing on-site execution with architectural supervision, quality control, and adherence to committed project milestones.'
  }
];
