export const portfolio = {
  "identity": {
    "name": "Supriyo Pramanik",
    "alias": "RiyoSup",
    "role": "Software Engineer",
    "positioning": "Building systems, backend architectures, and developer tools with deterministic outcomes.",
    "summary": "Developer focused on systems engineering, distributed architectures, performance tooling, and web applications. Emphasizes clean code, verifiable outcomes, and pragmatic engineering.",
    "location": "Bhubaneswar, India",
    "github": "https://github.com/RiyoSup",
    "githubAlternate": "https://github.com/I-AM-A-PROGRAMER",
    "linkedin": "https://linkedin.com/in/supriyopramanik",
    "email": "supriyo3606c@gmail.com"
  },
  "skills": {
    "Languages": [
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "Java",
      "SQL"
    ],
    "Frontend": [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
    "Backend": [
      "Node.js",
      "Express",
      "Flask",
      "REST APIs",
      "WebSockets"
    ],
    "Data": [
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Firebase"
    ],
    "Tools": [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel"
    ]
  },
  "flagshipProjects": [
    {
      "slug": "kiit-timetable",
      "name": "KIIT Timetable Web App",
      "outcome": "Unified multi-department and elective timetable viewer with automated Excel parsing and dynamic schedule trimming.",
      "role": "Sole Developer - Architecture, Excel parser pipeline, SQLite database, and frontend UI",
      "stack": [
        "Python",
        "Flask",
        "SQLite",
        "JavaScript",
        "HTML5",
        "CSS3",
        "PWA"
      ],
      "github": "https://github.com/I-AM-A-PROGRAMER/TimeTable",
      "liveUrl": "https://timetable-kiit.vercel.app",
      "overview": "Built to solve the scheduling dilemma across college departments where university students juggle core classes alongside multiple elective selections across varying sections.",
      "problem": "University students had to manually check sprawling multi-tab Excel spreadsheets across standard core departments and separate professional elective documents, leading to overlapping schedule confusion and room mismatches.",
      "solution": "Constructed an automated data ingestion pipeline via openpyxl that parses raw institutional spreadsheets into normalized SQLite tables, paired with a mobile-first PWA frontend featuring daily swipe views, weekly matrix grids, dynamic empty-slot trimming, and instant timetable PNG export.",
      "architecture": "Openpyxl batch processing script builds a normalized SQLite relational schema. A lightweight Flask microservice exposes structured REST endpoints (/api/sections, /api/timetable) with offline-first client caching via Service Workers.",
      "engineeringDecisions": [
        "Selected SQLite with Python build scripts to convert static Excel exports into relational rows, reducing server-side runtime overhead to zero computation per view.",
        "Engineered dynamic column trimming that inspects maximum class time slot bounds across the student specific active week, saving viewport real estate on mobile screens.",
        "Implemented client-side html2canvas weekly schedule image export so students can view their schedules completely offline in gallery without connectivity."
      ],
      "challenges": [
        "Inconsistent cell merging and non-standard department naming inside college Excel revisions.",
        "Handling elective collision avoidance and rendering overlapping laboratory blocks accurately across 7-day grid coordinates."
      ],
      "limitations": "Relies on manual script execution when semester schedule revisions are issued by college authorities rather than a direct automated academic portal webhook.",
      "whatToImprove": "Implement automated checksum diffing on spreadsheet file uploads with an admin portal to hot-reload database tables zero-downtime."
    },
    {
      "slug": "villageroll-trade-predictor",
      "name": "Villageroll Trade Predictor",
      "outcome": "Deterministic Minecraft villager trading sequence engine and navigator based on world seed algorithms.",
      "role": "Full-stack Developer - PRNG sequence analysis, trading navigator state machine, Astro UI",
      "stack": [
        "TypeScript",
        "Astro",
        "JavaScript",
        "Algorithms",
        "Web Workers"
      ],
      "github": "https://github.com/RiyoSup/villager-roll",
      "liveUrl": "https://villageroll.com",
      "overview": "A high-precision utility for Minecraft Java Edition players that predicts and tracks villager trade roll sequences from world seeds without brute-force guesswork.",
      "problem": "Players spend hours breaking and placing lecterns blindly trying to obtain rare enchanted books like Mending, without knowing how many rolls they are away from their target trade.",
      "solution": "Reversed Minecraft Java PRNG trade generation algorithms to compute exact roll sequences from seed coordinates. Developed a synchronization engine that triangulates player roll position from 2-3 observed workstation offers.",
      "architecture": "Client-side algorithmic engine implemented in TypeScript utilizing Web Workers to compute seed roll permutations asynchronously without blocking the browser main thread or UI rendering.",
      "engineeringDecisions": [
        "Used deterministic pseudo-random state synchronization matching Java Edition 1.20+ trade tables instead of naive probabilistic approximations.",
        "Built a multi-observation synchronization filter that handles identical trade ambiguities by prompting for successive rolls until a unique roll index is confirmed."
      ],
      "challenges": [
        "Simulating Java Edition 64-bit integer arithmetic precision faithfully inside browser JavaScript engines without overflow deviations.",
        "Handling trade rebalance configuration flags dynamically across Minecraft releases."
      ],
      "limitations": "Currently scoped strictly to Java Edition novice Librarian trades with trade rebalance toggle disabled.",
      "whatToImprove": "Expand simulation models to support Armorer, Weaponsmith, and Toolsmith villager trade trees."
    },
    {
      "slug": "network-security-traffic-analyzer",
      "name": "Network Traffic & Protocol Benchmark Suite",
      "outcome": "Low-overhead network stress and socket resilience benchmarking tool built to evaluate protocol-level load handling.",
      "role": "Developer - Socket programming, concurrency modeling, performance analysis",
      "stack": [
        "Python",
        "Socket Programming",
        "Asyncio",
        "TCP/IP",
        "Linux"
      ],
      "github": "https://github.com/RiyoSup/network-traffic-suite",
      "liveUrl": null,
      "overview": "A network layer stress and protocol resilience testbed designed to measure edge server throughput, connection drop rates, and proxy resistance under sustained traffic loads.",
      "problem": "Understanding how edge servers, proxies, and load balancers degrade under concurrent socket saturation requires low-level socket instrumentation without the synthetic overhead of bloated GUI test suites.",
      "solution": "Built an asynchronous network testing harness capable of orchestrating multi-threaded socket pipelines, measuring TLS handshake latencies, connection timeouts, and buffer saturation thresholds.",
      "architecture": "Multi-threaded worker pool written in Python leveraging non-blocking sockets and asyncio event loops to stream protocol payloads and record latency percentiles.",
      "engineeringDecisions": [
        "Utilized raw asynchronous socket streams to bypass higher-level HTTP client overhead and isolate transport layer characteristics.",
        "Structured modular payload generators to benchmark varied traffic patterns (HTTP keep-alive, TCP SYN saturation, burst request trains)."
      ],
      "challenges": [
        "Operating system file descriptor limits (ulimit) during high concurrency execution on Linux environments.",
        "Accurately capturing sub-millisecond connection establishment times without measurement latency interference."
      ],
      "limitations": "Requires root socket capabilities and strict private lab network sandboxing to avoid external network disruption.",
      "whatToImprove": "Re-implement core socket dispatch in Rust or C for zero-copy packet transmission and reduced CPU footprint under high gigabit loads."
    }
  ],
  "experience": [
    {
      "role": "Computer Science & Engineering Student",
      "organization": "KIIT University",
      "period": "2023 - Present",
      "location": "Bhubaneswar, India",
      "description": "Coursework in Data Structures & Algorithms, Computer Networks, Operating Systems, Database Management Systems, and Object-Oriented Software Design.",
      "achievements": [
        "Built automated scheduling and academic workflow systems adopted across multiple student batches.",
        "Completed algorithmic lab coursework in C and Java with emphasis on graph theory and dynamic programming optimization."
      ]
    },
    {
      "role": "Open Source Contributor & Developer",
      "organization": "Independent Projects",
      "period": "2023 - Present",
      "location": "Remote",
      "description": "Architecting developer utilities, academic software, network tools, and algorithmic models with open-source repositories.",
      "achievements": [
        "Engineered responsive web applications and data pipelines with real user adoption.",
        "Authored technical repositories with clear documentation, architectural breakdowns, and reproducible builds."
      ]
    }
  ],
  "writing": [
    {
      "slug": "deterministic-prng-minecraft-villagers",
      "title": "Simulating Minecraft Java PRNG in Browser JavaScript",
      "date": "2024-08-15",
      "readTime": "6 min read",
      "excerpt": "How to handle 64-bit integer state transitions and avoid floating point inaccuracies when reverse-engineering Java random number generation for the web.",
      "content": "Deep dive into Java Edition random number generators (Java Random / LCG), handling 64-bit BigInt calculations in JavaScript, and building a rolling state triangulator from observed trade results."
    },
    {
      "slug": "sqlite-vs-runtime-excel-parsing",
      "title": "Why We Ingest Spreadsheets into SQLite for Microservices",
      "date": "2024-06-20",
      "readTime": "5 min read",
      "excerpt": "Parsing multi-megabyte Excel files on web requests kills latency. Moving ingestion to build-time SQLite pipelines reduced response times to sub-5ms.",
      "content": "A case study on building the KIIT Timetable application. Exploring why parsing raw openpyxl workbooks during web requests is an anti-pattern, and how a one-time build script normalized three schedules into a 120KB SQLite database."
    }
  ]
} as const;

export type PortfolioData = typeof portfolio;
