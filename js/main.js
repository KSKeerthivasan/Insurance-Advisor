// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - windowHeight / 4) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

const modalData = {
    life: {
        brand: "lic",
        title: "Life & Wealth Protection",
        provider: "Life Insurance Corporation of India (LIC)",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Secure your family's future with trusted LIC plans.",
        plans: ["Term Insurance", "Endowment Plans", "Money Back", "Child Plans", "Pension Solutions"],
        whoFor: ["Young earners starting a career", "Families with dependents", "Parents planning for children", "Individuals nearing retirement"],
        benefits: ["Guaranteed financial security", "Combination of savings & returns", "Significant tax benefits under Sec 80C"]
    },
    health: {
        brand: "star",
        title: "Health Insurance",
        provider: "Star Health and Allied Insurance",
        logo: "assets/logo-1/star-health-color.png",
        banner: "assets/health-banner.png",
        tagline: "Comprehensive health coverage for you and your family.",
        plans: ["Individual Health Plans", "Family Floater Plans", "Senior Citizen Red Carpet", "Critical Illness Cover", "Super Top-Up Covers"],
        whoFor: ["Individuals looking for medical safety", "Families with children", "Senior citizens", "Individuals with high health risks"],
        benefits: ["Extensive hospital expense coverage", "Cashless treatment in network hospitals", "Emergency medical protection"]
    },
    general: {
        brand: "united",
        title: "General Insurance",
        provider: "United India Insurance Company",
        logo: "assets/logo-1/united-expnd.png",
        banner: "assets/general-banner.png",
        tagline: "Protect your assets, travel, and risks effectively.",
        plans: ["Motor Insurance (2W/4W)", "Travel Insurance", "Property/Home Insurance", "Personal Accident Cover", "Cyber Insurance"],
        whoFor: ["Vehicle owners", "Frequent international travelers", "Home and property owners", "Business professionals"],
        benefits: ["Comprehensive asset protection", "Wide range of risk coverage", "Immediate financial safety net"]
    },
    loans: {
        brand: "lichfl",
        title: "Loans & Finance",
        provider: "LIC Housing Finance Ltd",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Flexible financing solutions for your home and property.",
        plans: ["Home Loans", "Loan Against Property", "Renovation Loans", "Balance Transfer", "Top-Up Loans"],
        whoFor: ["First-time home buyers", "Existing property owners", "Home renovators", "Individuals looking for better rates"],
        benefits: ["Affordable interest rates", "Flexible repayment tenures", "Quick and hassle-free processing"]
    },
    tarun: {
        brand: "lic",
        title: "LIC Jeevan Tarun",
        provider: "Future-Ready Child Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/tarun-banner.png",
        tagline: "Secure your child’s future with guaranteed savings and protection",
        intro: "Build a strong financial foundation for your child’s education and life goals",
        plans: [
            "Annual payouts from age 20 to 24",
            "Lump sum maturity at age 25",
            "Life cover with bonus benefits"
        ],
        labelReason: "Why Parents Choose This Plan",
        reasonDesc: "A child-focused savings plan designed to support education and future financial needs while ensuring life protection",
        whoFor: [
            "Structured payouts during key education years",
            "Combines savings with insurance protection",
            "Flexible options based on your financial goals"
        ],
        extraSections: [
            {
                title: "What Your Child Gets",
                items: [
                    "<strong>Maturity Benefit:</strong> Receive a lump sum at age 25 along with bonuses (25% to 100% of Sum Assured depending on chosen option)",
                    "<strong>Life Protection:</strong> Higher of 7× annual premium or 125% of Sum Assured plus bonuses",
                    "<strong>Guaranteed safety:</strong> Minimum 105% of total premiums paid guaranteed"
                ]
            },
            {
                title: "Bonus Growth Benefits",
                items: [
                    "Participates in LIC profits regularly",
                    "Earns Simple Reversionary Bonus annually",
                    "Eligible for Final Additional Bonus on maturity or claim"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose annual payout option (0% to 15% from age 20 to 24)",
                    "Option to receive benefits in installments",
                    "Loan facility available after 2 full years of premiums",
                    "Premium Waiver Rider available for parent's protection"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Participating, Child Savings Plan",
                    "Premium Paying Term: (20 – entry age) years",
                    "Policy Term: (25 – entry age) years",
                    "Entry Age: 90 days to 12 years",
                    "Sum Assured: ₹75,000 (minimum) – No upper limit"
                ]
            }
        ]
    },
    labh: {
        brand: "lic",
        title: "LIC Jeevan Labh",
        provider: "Guaranteed Savings Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Pay for a limited time. Enjoy benefits for the long term",
        intro: "Premiums stop early. Benefits continue till maturity",
        plans: [
            "Limited premium payment term",
            "Guaranteed maturity with bonuses",
            "Strong life cover throughout policy term"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "A savings + protection plan designed to build wealth while reducing long-term premium burden",
        whoFor: [
            "Pay premiums for a shorter duration",
            "Continue to stay covered even after premiums stop",
            "Ideal for long-term financial goals and family security"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Maturity Benefit:</strong> Get full Sum Assured along with bonuses at the end of policy term",
                    "<strong>Life Protection:</strong> Higher of 7× annual premium or Sum Assured + bonuses",
                    "<strong>Guaranteed safety:</strong> Minimum 105% of total premiums paid guaranteed"
                ]
            },
            {
                title: "Bonus Growth Benefits",
                items: [
                    "Participates in LIC profits",
                    "Earns Simple Reversionary Bonus",
                    "Eligible for Final Additional Bonus at maturity or claim"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose policy term: 16, 21, or 25 years",
                    "Premium payment term: 10, 15, or 16 years",
                    "Option to receive maturity in installments (5, 10, or 15 years)",
                    "Loan facility available after 2 years",
                    "Optional riders for extra protection"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Participating, Endowment Plan",
                    "Premium Paying Term: 10 / 15 / 16 years",
                    "Policy Term: 16 / 21 / 25 years",
                    "Entry Age: 8 to 59 years (depends on term)",
                    "Maturity Age: Maximum 75 years",
                    "Sum Assured: ₹2,00,000 (minimum) – No limit"
                ]
            }
        ]
    },
    utsav: {
        brand: "lic",
        title: "LIC Jeevan Utsav",
        provider: "Lifetime Income + Protection Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Get guaranteed income for life with complete financial security",
        intro: "Turn your savings into a lifelong income stream for you and your family",
        plans: [
            "Guaranteed yearly income after premium term",
            "Whole life coverage with fixed benefits",
            "Flexible income options with accumulation feature"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "A long-term wealth + income plan designed to provide lifetime financial stability",
        whoFor: [
            "Converts savings into regular income stream",
            "Guarantees fixed returns (no market risk)",
            "Ideal for retirement planning and passive income"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Income Benefit:</strong> Receive 10% of Sum Assured every year as income (Regular or Flexi option)",
                    "<strong>Life Protection:</strong> Higher of Basic Sum Assured or 7× annual premium + guaranteed additions",
                    "<strong>Guaranteed safety:</strong> Minimum 105% of total premiums paid assured"
                ]
            },
            {
                title: "Bonus Growth Benefits",
                items: [
                    "Guaranteed Additions every year during premium term",
                    "Fixed returns (not market-linked, fully predictable)",
                    "No dependency on market performance"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose premium paying term: 5 to 16 years",
                    "Two income options: Regular Income (fixed yearly payout) or Flexi Income (accumulate + withdraw with interest ~5.5%)",
                    "Loan facility available",
                    "Option to take death benefit in installments"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Non-participating, Whole Life Plan",
                    "Premium Paying Term: 5 to 16 years",
                    "Policy Coverage: Whole life (up to 100 years)",
                    "Entry Age: 30 days to 65 years (depends on term)",
                    "Sum Assured: ₹5,00,000 (minimum) – No limit"
                ]
            }
        ]
    },
    moneyBack: {
        brand: "lic",
        title: "LIC Money Back Plan – 25 Years",
        provider: "Guaranteed Returns + Periodic Payout Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Get regular payouts during the policy term while staying fully protected",
        intro: "A perfect blend of savings, protection, and liquidity at every stage",
        plans: [
            "Money back at regular intervals",
            "Life cover throughout the policy term",
            "Final lump sum at maturity"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Designed for people who want returns during the policy, not just at the end",
        whoFor: [
            "Regular cash flow every few years",
            "Participates in bonuses (higher returns potential)",
            "Ideal for planned expenses like education, marriage, or milestones"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Survival Benefits (Money Back):</strong> Get 15% of Sum Assured at 5th, 10th, 15th, and 20th year",
                    "<strong>Maturity Benefit:</strong> Receive 40% of Sum Assured + bonuses at the end of 25 years",
                    "<strong>Life Protection:</strong> Higher of 125% of Sum Assured or 7× annual premium + bonuses",
                    "<strong>Guaranteed safety:</strong> Minimum 105% of total premiums paid assured"
                ]
            },
            {
                title: "Bonus Growth Benefits",
                items: [
                    "Participates in LIC profits",
                    "Earn Simple Reversionary Bonuses every year",
                    "Final Additional Bonus at maturity or claim"
                ]
            },
            {
                title: "Flexible & Secure",
                items: [
                    "Option to take death benefit in instalments",
                    "Loan facility available for liquidity needs",
                    "Optional riders for extra protection"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Participating, Non-linked Savings Plan",
                    "Policy Term: 25 years",
                    "Premium Paying Term: 20 years",
                    "Entry Age: 13 to 45 years",
                    "Maturity Age: Up to 70 years",
                    "Sum Assured: ₹2,00,000 (minimum) – No limit"
                ]
            }
        ]
    },
    shanti: {
        brand: "lic",
        title: "LIC Jeevan Shanti",
        provider: "Lifetime Guaranteed Income Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Turn a one-time investment into guaranteed lifelong income",
        intro: "Secure a fixed income stream that lasts as long as you live",
        plans: [
            "Guaranteed annuity for lifetime",
            "Flexible deferment options (start later)",
            "Single premium – no long-term payment stress"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Built for those who want predictable, risk-free income after a certain period",
        whoFor: [
            "Ideal for retirement planning and passive income",
            "No market risk – fixed and guaranteed returns",
            "Option for single life or joint life coverage"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Income Benefit (Annuity):</strong> Receive guaranteed income after deferment period (1 to 5 years). Paid monthly, quarterly, half-yearly, or yearly for lifetime",
                    "<strong>Life Protection:</strong> Death Benefit = Higher of (Purchase Price + accrued benefits − annuity paid) OR (105% of Purchase Price)"
                ]
            },
            {
                title: "Guaranteed Benefits (No Market Risk)",
                items: [
                    "Fixed annuity rates decided at policy start",
                    "Fully predictable income (no market dependency)",
                    "No bonus system – everything is guaranteed"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose deferment period: 1 to 5 years",
                    "Options: Single Life or Joint Life annuity",
                    "Death benefit options: lump sum / annuity / installments",
                    "Loan facility available",
                    "Can choose payout frequency"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Non-participating Deferred Annuity Plan",
                    "Premium Type: Single Premium",
                    "Entry Age: 30 to 79 years",
                    "Deferment Period: 1 to 5 years",
                    "Minimum Investment: ₹1,50,000 (approx.)",
                    "Annuity Modes: Monthly / Quarterly / Half-yearly / Yearly"
                ]
            }
        ]
    },
    akshay: {
        brand: "lic",
        title: "LIC Jeevan Akshay VII",
        provider: "Instant Lifetime Income Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Start receiving guaranteed income immediately after a one-time investment",
        intro: "Convert your savings into instant, lifelong income with zero delay",
        plans: [
            "Immediate annuity starts right away",
            "Guaranteed income for lifetime",
            "Multiple annuity options for flexibility"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Designed for those who want income now, not later",
        whoFor: [
            "No waiting period — income starts immediately",
            "Ideal for retirees or those needing instant cash flow",
            "Fixed returns with zero market risk"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Immediate Income (Annuity):</strong> Receive guaranteed income right after investing. Paid monthly, quarterly, half-yearly, or yearly for lifetime",
                    "<strong>Life Protection (Option-Based):</strong> Depending on chosen option: Lifetime income continues, Option to return purchase price on death, Joint life options for spouse/family security"
                ]
            },
            {
                title: "Guaranteed Benefits",
                items: [
                    "Fixed annuity rates locked at policy start",
                    "No market dependency",
                    "Predictable and stable income"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose from 10 annuity options",
                    "Options with guaranteed period (5, 10, 15, 20 years)",
                    "Increasing income option (3% yearly increase)",
                    "Joint life options available",
                    "Loan facility available (selected options)"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Non-participating Immediate Annuity Plan",
                    "Premium Type: Single Premium",
                    "Entry Age: 25 to 85 years",
                    "Minimum Investment: ₹1,00,000 (approx.)",
                    "Annuity Modes: Monthly / Quarterly / Half-yearly / Yearly"
                ]
            }
        ]
    },
    amar: {
        brand: "lic",
        title: "LIC Jeevan Amar",
        provider: "Pure Protection Life Cover Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Maximum life cover at minimal cost to secure your family’s future",
        intro: "Pay less. Protect more. Ensure your family is financially safe",
        plans: [
            "High life cover at affordable premiums",
            "Flexible sum assured options",
            "Strong financial protection for your family"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Built for pure protection — no distractions, just security",
        whoFor: [
            "Designed to financially protect your family in your absence",
            "Low premium compared to traditional plans",
            "Ideal for income earners with dependents"
        ],
        extraSections: [
            {
                title: "What Your Family Gets",
                items: [
                    "<strong>Death Benefit:</strong> Sum Assured paid to family in case of unfortunate death (Higher of 7× annual premium, 105% of total premiums paid, or Absolute Sum Assured)",
                    "<strong>No Maturity Benefit:</strong> This is a pure protection plan — no returns on survival"
                ]
            },
            {
                title: "Protection Strength",
                items: [
                    "Option for Level or Increasing Sum Assured",
                    "Increasing cover grows up to 2× over time",
                    "Covers long-term financial risks"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Choose premium payment: Single / Regular / Limited",
                    "Policy term: 10 to 40 years",
                    "Option to receive death benefit in installments",
                    "Optional Accident Benefit Rider available"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Non-participating Pure Term Plan",
                    "Policy Term: 10 to 40 years",
                    "Entry Age: 18 to 65 years",
                    "Maturity Age: Up to 80 years",
                    "Sum Assured: ₹25,00,000 (minimum) – No limit"
                ]
            }
        ]
    },
    saral: {
        brand: "lic",
        title: "LIC Saral Jeevan Bima",
        provider: "Simple & Affordable Protection Plan",
        logo: "assets/logo-1/lic-glow.png",
        banner: "assets/life-banner.png",
        tagline: "Get straightforward life insurance with no complexity and full protection",
        intro: "A simple plan that ensures your family is financially secure at low cost",
        plans: [
            "Easy to understand, no complicated benefits",
            "Affordable premiums for basic protection",
            "Standard plan with fixed features"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Built for people who want simple and reliable life cover without confusion",
        whoFor: [
            "Standardized plan (same benefits for everyone)",
            "Ideal for first-time insurance buyers",
            "Focused purely on financial protection"
        ],
        extraSections: [
            {
                title: "What Your Family Gets",
                items: [
                    "<strong>Death Benefit:</strong> Sum Assured paid in case of death. Higher of 10× annual premium, 105% of total premiums paid, or Basic Sum Assured",
                    "<strong>Waiting Period Clause:</strong> First 45 days: only accidental death covered. After 45 days: full coverage",
                    "<strong>No Maturity Benefit:</strong> No returns if policyholder survives"
                ]
            },
            {
                title: "Protection Strength",
                items: [
                    "Pure term insurance (focused on risk coverage)",
                    "Ensures financial stability for family",
                    "Government-standardized structure"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Premium options: Single / Regular / Limited",
                    "Policy term: 5 to 40 years",
                    "Multiple payment modes (yearly, half-yearly, monthly)"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Non-linked, Non-participating Pure Term Plan",
                    "Policy Term: 5 to 40 years",
                    "Entry Age: 18 to 65 years",
                    "Maturity Age: Up to 70 years",
                    "Sum Assured: ₹5,00,000 to ₹25,00,000"
                ]
            }
        ]
    },
    starSuper: {
        brand: "star",
        title: "Star Health Super Star",
        provider: "Unlimited Health Protection Plan",
        logo: "assets/logo-1/star-health-color.png",
        banner: "assets/health-banner.png",
        tagline: "No limits. No surprises. Just complete health protection for life",
        intro: "Your medical coverage grows with you — without hitting a ceiling",
        plans: [
            "Unlimited restoration of sum insured",
            "Any room, any hospital — no extra charges",
            "Premium stays locked with “Freeze Your Age”"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Built for people who don’t want to worry about medical bills ever again",
        whoFor: [
            "Coverage continues even after multiple claims",
            "Premium advantage through age lock feature",
            "Designed for long-term, evolving health needs"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Complete Hospitalisation Coverage:</strong> Covers full medical expenses including room rent (any room), ICU, doctor fees, medicines, diagnostics, surgeries",
                    "<strong>Pre & Post Hospitalisation:</strong> 90 days before hospitalisation and 180 days after discharge",
                    "<strong>Advanced Treatments Covered:</strong> Includes robotic surgeries, stem cell therapy, deep brain stimulation"
                ]
            },
            {
                title: "Coverage Strength",
                items: [
                    "Unlimited automatic restoration after every claim",
                    "No Claim Bonus: +50% yearly up to 100%",
                    "Additional 100% bonus at renewal (no cap)",
                    "Covers AYUSH treatments (Ayurveda, Yoga, etc.)"
                ]
            },
            {
                title: "Flexible As Your Needs",
                items: [
                    "Sum Insured: ₹5L to ₹1Cr + Unlimited option",
                    "Individual / Family / Multi-individual plans",
                    "Add spouse, newborn, or child anytime",
                    "21 optional covers for full customization"
                ]
            },
            {
                title: "Premium & Savings Advantages",
                items: [
                    "Freeze Your Age: pay premium based on entry age until claim",
                    "Wellness rewards: up to 20% discount",
                    "Smart network discount: 15%",
                    "Long-term policy discounts available"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Comprehensive Health Insurance",
                    "Entry Age: 18 years to no upper limit",
                    "Children Entry: 91 days to 25 years",
                    "Sum Insured: ₹5L – ₹1Cr + Unlimited",
                    "Waiting Period: Initial: 30 days, Pre-existing diseases: 36 months"
                ]
            }
        ]
    },
    starComp: {
        brand: "star",
        title: "Star Comprehensive Insurance Policy",
        provider: "All-in-One Health Protection Plan",
        logo: "assets/logo-1/star-health-color.png",
        banner: "assets/health-banner.png",
        tagline: "Complete health coverage that protects you across every stage of life",
        intro: "A balanced plan combining hospital care, outpatient benefits, and family coverage",
        plans: [
            "Covers hospitalization + outpatient treatments",
            "Includes maternity and newborn benefits",
            "Automatic restoration with bonus growth"
        ],
        labelReason: "Why People Choose This Plan",
        reasonDesc: "Built for families who want complete coverage, not just basic insurance",
        whoFor: [
            "Covers both major and minor medical expenses",
            "Includes dental, eye care, and consultations",
            "Ideal for long-term family health planning"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Hospitalisation Coverage:</strong> Covers full inpatient expenses including Room rent (Single Private AC), ICU, surgeries, diagnostics, specialist fees",
                    "<strong>Pre & Post Hospitalisation:</strong> 60 days before hospitalisation and 90 days after discharge",
                    "<strong>Modern Treatments Covered:</strong> Robotic surgeries, stem cell therapy, deep brain stimulation"
                ]
            },
            {
                title: "Coverage Strength",
                items: [
                    "Automatic restoration of Sum Insured (once per year)",
                    "Cumulative Bonus up to 100% of Sum Insured",
                    "Covers AYUSH treatments (Ayurveda, Homeopathy, etc.)",
                    "Organ donor expenses covered"
                ]
            },
            {
                title: "Family & Lifestyle Benefits",
                items: [
                    "Delivery and newborn coverage available",
                    "Outpatient consultation (including dental & ophthalmic)",
                    "Preventive health check-ups",
                    "Hospital cash benefit"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Comprehensive Health Insurance",
                    "Entry Age: 18 to 65 years",
                    "Waiting Period: Initial: 30 days, Pre-existing diseases: 36 months, Maternity: 24 months"
                ]
            }
        ]
    },
    starSenior: {
        brand: "star",
        title: "Star Senior Citizens Red Carpet",
        provider: "Senior-Focused Health Protection Plan",
        logo: "assets/logo-1/star-health-color.png",
        banner: "assets/health-banner.png",
        tagline: "Health insurance designed specifically for people above 60 — with lifetime renewal",
        intro: "A dedicated plan that ensures medical support when it’s needed the most",
        plans: [
            "Entry up to 75 years with lifelong renewals",
            "Designed exclusively for senior citizens",
            "Covers hospitalization, home care, and consultations"
        ],
        labelReason: "Why Seniors Choose This Plan",
        reasonDesc: "Built for a segment most insurers avoid — older individuals needing coverage",
        whoFor: [
            "No restriction after entry — renew for lifetime",
            "Tailored coverage considering age-related health risks",
            "Ideal for retirees needing medical security"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Hospitalisation Coverage:</strong> Room rent, ICU charges, surgeries, medicines",
                    "<strong>Pre & Post Hospitalisation:</strong> 30 days before and post-hospital expenses up to ~7% of hospital cost",
                    "<strong>Modern Treatments Covered:</strong> Includes advanced procedures with policy limits"
                ]
            },
            {
                title: "Coverage Strength",
                items: [
                    "Covers AYUSH treatments",
                    "Home care treatment up to 10% of Sum Insured (max ₹50,000/year)",
                    "Emergency ambulance and compassionate travel covered",
                    "Second medical opinion available"
                ]
            },
            {
                title: "Senior-Friendly Benefits",
                items: [
                    "Unlimited tele-consultations",
                    "Preventive health check-ups",
                    "Outpatient consultation benefits",
                    "Repatriation of mortal remains"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Senior Citizen Health Insurance",
                    "Entry Age: 60 to 75 years (Lifetime renewal)",
                    "Co-payment: 30% on all claims",
                    "Waiting Period: Initial: 30 days, Pre-existing diseases: 12 months"
                ]
            }
        ]
    },
    starStudent: {
        brand: "star",
        title: "Star Student Travel Protect",
        provider: "Global Student Protection Plan",
        logo: "assets/logo-1/star-health-color.png",
        banner: "assets/health-banner.png",
        tagline: "Study abroad with confidence — protected from risks across the world",
        intro: "A complete travel insurance plan designed for students pursuing education overseas",
        plans: [
            "Covers medical + travel + legal risks abroad",
            "Protection during entire study period",
            "Financial support for unexpected disruptions"
        ],
        labelReason: "Why Students Choose This Plan",
        reasonDesc: "Built for students stepping into unknown environments abroad",
        whoFor: [
            "Covers risks beyond health (travel, legal, baggage)",
            "Designed specifically for overseas education journeys",
            "Provides security for both student and family"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Medical Protection:</strong> Emergency medical expenses, dental, evacuation to India, repatriation",
                    "<strong>Travel Protection:</strong> Loss of checked-in baggage, loss of passport support, personal accident"
                ]
            },
            {
                title: "Coverage Strength",
                items: [
                    "Personal liability protection (damage/injury to others)",
                    "Bail bond support for legal issues",
                    "Compassionate visit coverage for family",
                    "24×7 global assistance support"
                ]
            },
            {
                title: "Student-Focused Benefits",
                items: [
                    "Study interruption support (medical reasons)",
                    "Sponsor protection (in case of sponsor’s death)",
                    "Tuition fee reimbursement for disruptions"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Plan Type: Overseas Student Travel Insurance",
                    "Coverage: Medical + Travel + Legal + Academic risks",
                    "Duration: Short-term up to 1 year",
                    "Coverage options: $50,000 / $100,000 / $250,000"
                ]
            }
        ]
    },
    homeLoan: {
        brand: "lichfl",
        title: "LIC Housing Finance Home Loan",
        provider: "Smart Home Loan Solution",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Turn your dream home into reality with flexible loans and low interest rates",
        intro: "Finance your home with confidence — low EMI, long tenure, and easy approval",
        plans: [
            "Interest rates starting from ~7.15%",
            "Loan tenure up to 30 years",
            "Zero prepayment charges"
        ],
        labelReason: "Why People Choose This Loan",
        reasonDesc: "Designed for maximum affordability and flexibility",
        whoFor: [
            "One of the lowest interest rates in the market",
            "Suitable for salaried, self-employed, professionals, and NRIs",
            "Customizable loan options based on eligibility"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Loan Benefits:</strong> Finance for purchase, construction, or renovation. Balance transfer and loan takeover available",
                    "<strong>Repayment Advantage:</strong> Long tenure reduces EMI burden, flexible repayment, no prepay penalty"
                ]
            },
            {
                title: "Interest Rate Snapshot",
                items: [
                    "CIBIL ≥ 825: ~7.15% to 7.45%",
                    "CIBIL 750–824: ~7.25% to 7.75%",
                    "CIBIL 700–749: ~7.95% to 8.25%",
                    "CIBIL < 700: ~8.75% to 10%"
                ]
            },
            {
                title: "Documents Required",
                items: [
                    "<strong>KYC:</strong> PAN, Aadhaar, Address Proof",
                    "<strong>Income:</strong> Salary slips/ITR + Bank statements",
                    "<strong>Property:</strong> Ownership proof, builder allotment, tax receipts"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Loan Amount: Up to ₹15 Crore",
                    "LTV: Up to 90% (≤ ₹30L), 80% (₹30L–₹75L), 75% (> ₹75L)",
                    "Eligibility: Resident Indians & NRIs"
                ]
            }
        ]
    },
    plotLoan: {
        brand: "lichfl",
        title: "LIC Housing Finance Plot Loan",
        provider: "Land Investment Loan Solution",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Own your land today — build your future tomorrow",
        intro: "Finance your residential plot with flexible terms and affordable rates",
        plans: [
            "Loan for residential plot purchase",
            "Interest rates starting ~7.35%",
            "Simple and fast approval process"
        ],
        labelReason: "Why People Choose This Loan",
        reasonDesc: "Designed for people who want to secure land before construction",
        whoFor: [
            "Ideal for future home planning",
            "Transparent and simple loan process",
            "Suitable for both salaried and self-employed"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Loan Benefits:</strong> Purchase of plots from government/approved layouts. Composite loan options available",
                    "<strong>Convenience:</strong> Online sanction facility, minimal documentation, low EMI structure"
                ]
            },
            {
                title: "Financial Strength",
                items: [
                    "Loan up to 75% of plot value",
                    "Amount up to ₹15 Crore",
                    "Competitive floating interest rates"
                ]
            },
            {
                title: "Interest Rate Snapshot",
                items: [
                    "CIBIL ≥ 825: ~7.35% to 7.65%",
                    "CIBIL 750–824: ~7.45% to 7.95%",
                    "CIBIL 700–749: ~8.15% to 8.45%",
                    "CIBIL < 700: ~8.95% to 9.70%"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Loan Tenure: Up to 15 years",
                    "Eligibility: Salaried / Self-employed / NRI",
                    "LTV: Up to 75% of property value"
                ]
            }
        ]
    },
    pensionersLoan: {
        brand: "lichfl",
        title: "LIC Housing Finance Pensioners Loan",
        provider: "Retirement-Friendly Home Loan",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Own your home even after retirement — without financial pressure",
        intro: "Designed for pensioners to access home loans with extended tenure and flexibility",
        plans: [
            "Loan tenure up to age 80",
            "Higher eligibility with co-applicants",
            "Interest rates starting ~7.15%"
        ],
        labelReason: "Why Pensioners Choose This Loan",
        reasonDesc: "Built for people who still want to own or upgrade a home after retirement",
        whoFor: [
            "Extends loan eligibility beyond working years",
            "Combines pension + family income for approval",
            "Designed specifically for pension-based income"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Loan Benefits:</strong> Home loan for purchase / construction / renovation. Children can be co-borrowers",
                    "<strong>Eligibility Advantage:</strong> Pension income considered, spouse mandatory as co-applicant"
                ]
            },
            {
                title: "Interest Rate Snapshot",
                items: [
                    "CIBIL ≥ 825: ~7.15% to 7.45%",
                    "CIBIL 750–824: ~7.25% to 7.75%",
                    "CIBIL < 700: ~8.75% to 10%"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Eligibility: Pensioners under DBPS",
                    "Entry Age: Up to 65 years",
                    "Tenure: Up to 30 years / Age 80"
                ]
            }
        ]
    },
    constructionLoan: {
        brand: "lichfl",
        title: "LIC Housing Finance Construction Loan",
        provider: "Build-Your-Home Loan Solution",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Don’t just buy a house — build it your way with flexible financing",
        intro: "Fund your home construction with low interest rates and structured payouts",
        plans: [
            "Interest rates starting ~7.15%",
            "Loan up to 90% of property value",
            "Tenure up to 30 years"
        ],
        labelReason: "Why People Choose This Loan",
        reasonDesc: "Built for people who want full control over their home construction",
        whoFor: [
            "Ideal for building on owned land",
            "Flexible funding based on construction stages",
            "Suitable for salaried, self-employed, professionals, and NRIs"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Loan Benefits:</strong> Finance for constructing a new home on owned land. Stage-based payouts",
                    "<strong>Convenience:</strong> Simple documentation, quick approval, structured EMI options"
                ]
            },
            {
                title: "Financial Strength",
                items: [
                    "Coverage up to 90% (≤ ₹30L), 80% (₹30L–₹75L), 75% (> ₹75L)",
                    "Loan amount up to ₹15 Crore",
                    "Competitive rates linked to CIBIL"
                ]
            },
            {
                title: "Interest Rate Snapshot",
                items: [
                    "CIBIL ≥ 825: ~7.15% to 7.45%",
                    "CIBIL 750–824: ~7.25% to 7.75%",
                    "CIBIL 700–749: ~7.95% to 8.25%"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Tenure: Salaried (30y), Self-employed (25y)",
                    "Purpose: Build house on owned land",
                    "Eligibility: Salaried / Self-employed / Professionals / NRIs"
                ]
            }
        ]
    },
    renovationLoan: {
        brand: "lichfl",
        title: "LIC Housing Finance Renovation Loan",
        provider: "Upgrade Your Home Loan Solution",
        logo: "assets/logo-1/lic-hfl-color-final.png",
        banner: "assets/loans-banner.png",
        tagline: "Transform your existing house into your dream home without financial stress",
        intro: "Upgrade, repair, or renovate your home with flexible funding and low EMI",
        plans: [
            "Interest rates starting ~7.15%",
            "Loan up to 90% of property value",
            "Easy approval with simple documentation"
        ],
        labelReason: "Why People Choose This Loan",
        reasonDesc: "Built for homeowners who want to improve, not relocate",
        whoFor: [
            "Ideal for renovation, repair, or home upgrades",
            "Avoids cost of buying a new property",
            "Suitable for salaried, self-employed, professionals, and NRIs"
        ],
        extraSections: [
            {
                title: "What You Get",
                items: [
                    "<strong>Loan Benefits:</strong> Finance for home renovation/repair. Available for existing and new customers",
                    "<strong>Convenience:</strong> Quick approval, low EMI options, flexible structuring"
                ]
            },
            {
                title: "Financial Strength",
                items: [
                    "Coverage based on value: up to 90% (≤ ₹30L), 80% (₹30L–₹75L), 75% (> ₹75L)",
                    "Amount up to ₹15 Crore"
                ]
            },
            {
                title: "Interest Rate Snapshot",
                items: [
                    "CIBIL ≥ 825: ~7.15% to 7.45%",
                    "CIBIL 750–824: ~7.25% to 7.75%",
                    "CIBIL 700–749: ~7.95% to 8.25%"
                ]
            },
            {
                title: "Plan At a Glance",
                items: [
                    "Tenure: Up to 30 years",
                    "Purpose: Repair, upgrade, or modify existing home",
                    "Eligibility: Salaried / Self-employed / Professionals / NRIs"
                ]
            }
        ]
    },
    uiMotor: {
        brand: "united",
        title: "United India Motor Insurance",
        provider: "United India Insurance Company",
        logo: "assets/logo-1/united-expnd.png",
        banner: "assets/general-banner.png",
        tagline: "Comprehensive protection for your vehicle against unforeseen risks",
        plans: ["Two-Wheeler Insurance", "Private Car Insurance", "Commercial Vehicle Cover"],
        whoFor: ["Owners of cars and bikes", "Commercial vehicle operators"],
        benefits: ["Third-party liability cover", "Own damage protection", "Cashless repair in network garages"]
    },
    uiFamily: {
        brand: "united",
        title: "United India Family Medicare",
        provider: "United India Insurance Company",
        logo: "assets/logo-1/united-expnd.png",
        banner: "assets/general-banner.png",
        tagline: "Affordable and comprehensive health cover for the entire family",
        plans: ["Family Floater Health Plan"],
        whoFor: ["Middle-class families", "Individuals seeking value-for-money health cover"],
        benefits: ["Cashless hospitalization", "Pre & Post hospitalization expenses", "Coverage for AYUSH treatments"]
    },
    uiAccident: {
        brand: "united",
        title: "Personal Accident Insurance",
        provider: "United India Insurance Company",
        logo: "assets/logo-1/united-expnd.png",
        banner: "assets/general-banner.png",
        tagline: "Financial security for you and your family in case of accidental risks",
        plans: ["Individual Personal Accident", "Group Personal Accident"],
        whoFor: ["Earning individuals", "Professionals with high mobility"],
        benefits: ["Accidental death benefit", "Permanent/Partial disability cover", "Educational grant for children"]
    }
};

const modalOverlay = document.getElementById('serviceModalOverlay');
const closeModalBtn = document.getElementById('closeModal');

function openModal(serviceKey) {
    const data = modalData[serviceKey];
    if (!data) return;

    // Populate Text & Assets
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.tagline;
    document.getElementById('modalLogo').src = data.logo;
    document.getElementById('modalBanner').src = data.banner;

    // Brand & Logo Calibration
    const modalLogo = document.getElementById('modalLogo');
    const brandClasses = ['lic', 'star', 'united', 'lichfl'];
    // Reset only brand-specific classes to prevent style accumulation
    modalLogo.classList.remove(...brandClasses);

    const brand = data.brand || 'default';
    if (brand !== 'default') {
        modalLogo.classList.add(brand);
    }

    // Update Labels if present
    const whoForLabel = document.querySelector('#modalWhoFor').previousElementSibling;
    if (data.labelReason) {
        whoForLabel.textContent = data.labelReason;
    } else {
        whoForLabel.textContent = "Who is this for?";
    }

    // Populate Lists
    const populateList = (id, items) => {
        const list = document.getElementById(id);
        list.innerHTML = '';
        if (items && items.length > 0) {
            items.forEach(text => {
                const li = document.createElement('li');
                li.innerHTML = text; // Allow rich text for bolding etc.
                list.appendChild(li);
            });
        }
    };

    populateList('modalHighlights', data.plans);
    populateList('modalWhoFor', data.whoFor);

    // Progressive Expansion Handling
    const expandContainer = document.getElementById('modalExpandContainer');
    const expandContent = document.getElementById('modalExpandContent');
    const expandBtn = document.getElementById('modalExpandBtn');

    // Reset Expansion State
    expandContent.classList.remove('active');
    expandContent.style.maxHeight = null;
    expandBtn.querySelector('.btn-text').textContent = 'More Details';
    expandBtn.querySelector('svg').style.transform = 'rotate(0deg)';

    if (data.extraSections && data.extraSections.length > 0) {
        expandContainer.style.display = 'block';
        expandContent.innerHTML = ''; // Clear previous and build fresh

        data.extraSections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'modal-extra-section';

            const title = document.createElement('div');
            title.className = 'modal-extra-title';
            title.textContent = section.title;

            const list = document.createElement('ul');
            list.className = 'modal-vertical-list';

            section.items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                list.appendChild(li);
            });

            sectionDiv.appendChild(title);
            sectionDiv.appendChild(list);
            expandContent.appendChild(sectionDiv);
        });
    } else {
        expandContainer.style.display = 'none';
    }

    // Show modal
    document.body.classList.add('modal-open');
    modalOverlay.classList.add('active');
}

// Toggle Expansion Logic
document.getElementById('modalExpandBtn').addEventListener('click', function () {
    const content = document.getElementById('modalExpandContent');
    const btnText = this.querySelector('.btn-text');
    const icon = this.querySelector('svg');
    const isExpanded = content.classList.contains('active');

    if (!isExpanded) {
        content.classList.add('active');
        btnText.textContent = 'Show Less';
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = 'transform 0.3s ease';
    } else {
        content.classList.remove('active');
        btnText.textContent = 'More Details';
        icon.style.transform = 'rotate(0deg)';
    }
});

function closeModal() {
    document.body.classList.remove('modal-open');
    modalOverlay.classList.remove('active');
}

// Global Event Delegation for Explore Buttons
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.explore-btn');
    if (btn) {
        const service = btn.getAttribute('data-service');
        openModal(service);
    }
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Tab Switching Logic
function switchTab(provider, btn) {
    // Update Tab Buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    // Update Tracks
    const tracks = document.querySelectorAll('.plans-track-group');
    tracks.forEach(t => t.classList.remove('active'));
    const activeTrack = document.getElementById(`track-${provider}`);
    activeTrack.classList.add('active');

    // Reset Scroll Position
    const view = document.getElementById('plansCarouselView');
    view.scrollLeft = 0;

    // Update Section Background
    const section = document.getElementById('plans');
    const bgVariable = `--${provider}-bg`;
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue(bgVariable);
    section.style.backgroundColor = bgColor;

    // Re-trigger reveal for new cards
    reveal();
}

// Modern Scroll-Based Carousel Logic
function initCarousel(viewId, nextId, prevId) {
    const view = document.getElementById(viewId);
    const nextBtn = document.getElementById(nextId);
    const prevBtn = document.getElementById(prevId);
    if (!view) return;

    const track = view.querySelector('.carousel-track');

    // Navigation Buttons
    const scrollAmount = () => view.offsetWidth * 0.8;

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            view.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            view.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });
    }

    // Drag-to-Scroll Enhancement (Desktop only)
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    view.addEventListener('mousedown', (e) => {
        isDown = true;
        view.classList.add('grabbing');
        startX = e.pageX - view.offsetLeft;
        scrollLeft = view.scrollLeft;
        isDragging = false;

        // Dynamic performance optimization - find active track
        const activeTrack = view.querySelector('.carousel-track.active') || view.querySelector('.carousel-track');
        if (activeTrack) activeTrack.style.willChange = 'transform';
    });

    view.addEventListener('mouseleave', () => {
        isDown = false;
        view.classList.remove('grabbing');
        const tracks = view.querySelectorAll('.carousel-track');
        tracks.forEach(t => t.style.willChange = 'auto');
    });

    view.addEventListener('mouseup', () => {
        isDown = false;
        view.classList.remove('grabbing');
        const tracks = view.querySelectorAll('.carousel-track');
        tracks.forEach(t => t.style.willChange = 'auto');
    });

    view.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - view.offsetLeft;
        const walk = (x - startX) * 2; // Scroll multiplier
        view.scrollLeft = scrollLeft - walk;

        if (Math.abs(walk) > 5) {
            isDragging = true;
        }
    });

    // Prevent link clicks during drag
    view.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    return {
        moveNext: () => view.scrollBy({ left: scrollAmount(), behavior: 'smooth' }),
        movePrev: () => view.scrollBy({ left: -scrollAmount(), behavior: 'smooth' })
    };
}

// Initialize Native Carousels
const solutionsCarousel = initCarousel('solutionsCarouselView', 'nextBtn', 'prevBtn');
const plansCarousel = initCarousel('plansCarouselView', 'plansNextBtn', 'plansPrevBtn');

// Keyboard Navigation
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        solutionsCarousel.moveNext();
        plansCarousel.moveNext();
    }
    if (e.key === 'ArrowLeft') {
        solutionsCarousel.movePrev();
        plansCarousel.movePrev();
    }
});

// CTA Modal Logic
let currentCtaMode = 'whatsapp';
let currentCtaSelectedNumber = '';

function detectCtaDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    return isMobile || isSmallScreen;
}

// Attach explicit event listeners to prevent ANY default link behavior
document.querySelectorAll('.cta-trigger-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const type = this.getAttribute('data-cta-type');
        openCtaModal(type);
    });

    // Handle touch explicitly for strict mobile compatibility
    btn.addEventListener('touchend', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const type = this.getAttribute('data-cta-type');
        openCtaModal(type);
    }, { passive: false });
});

function openCtaModal(type) {
    currentCtaMode = type;
    const overlay = document.getElementById('ctaModalOverlay');
    const title = document.getElementById('ctaModalTitle');
    const listContainer = document.getElementById('cta-advisor-list-container');
    const fallbackContainer = document.getElementById('cta-fallback-container');

    listContainer.style.display = 'flex';
    fallbackContainer.style.display = 'none';

    if (type === 'whatsapp') {
        title.textContent = "Chat with an Advisor";
        updateCtaButtons("Chat on WhatsApp", "cta-action-btn-green");
    } else {
        title.textContent = "Call an Advisor";
        updateCtaButtons("Call Advisor", "cta-action-btn-outline");
    }

    overlay.classList.add('active');
    document.body.classList.add('modal-open');
}

function updateCtaButtons(text, className) {
    const btn1 = document.getElementById('btn-advisor-1');
    const btn2 = document.getElementById('btn-advisor-2');
    [btn1, btn2].forEach(btn => {
        btn.textContent = text;
        btn.className = `cta-action-btn ${className}`;
    });
}

function closeCtaModal() {
    const overlay = document.getElementById('ctaModalOverlay');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function handleCtaOutsideClick(e) {
    if (e.target.id === 'ctaModalOverlay') closeCtaModal();
}

function handleCtaAction(number) {
    currentCtaSelectedNumber = number;
    if (currentCtaMode === 'whatsapp') {
        handleCtaWhatsApp(number);
    } else {
        handleCtaCall(number);
    }
}

function handleCtaWhatsApp(number) {
    const text = encodeURIComponent("Hi, I am interested in your insurance services");
    const url = `https://wa.me/${number}?text=${text}`;
    window.open(url, '_blank');
}

function handleCtaCall(number) {
    currentCtaSelectedNumber = number;
    if (detectCtaDevice()) {
        window.location.href = `tel:+${number}`;
    } else {
        showCtaFallback(number);
    }
}

function showCtaFallback(number) {
    const listContainer = document.getElementById('cta-advisor-list-container');
    const fallbackContainer = document.getElementById('cta-fallback-container');
    const fallbackNumber = document.getElementById('cta-fallback-number');
    const title = document.getElementById('ctaModalTitle');
    const overlay = document.getElementById('ctaModalOverlay');

    title.textContent = "Contact Advisor";
    listContainer.style.display = 'none';
    fallbackContainer.style.display = 'block';
    fallbackNumber.textContent = `+${number}`;
    
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
}

function copyCtaNumber() {
    navigator.clipboard.writeText(currentCtaSelectedNumber).then(() => {
        const feedback = document.getElementById('ctaCopyFeedback');
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 2000);
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCtaModal();
});

// Hero Advisor Swap Logic
let activeAdvisor = 0; // 0 = Kalpana, 1 = Selvaraj
const advisorData = [
    {
        name: "R KALPANA, M.A",
        role: "Insurance Advisor",
        agentId: "Insurance Advisor | Agent ID: 0141271B",
        tagline: "Helping families make financially secure decisions through trusted guidance.",
        image: "assets/logo-1/ad-1.png",
        specialization: "Specializes in Life Insurance (LIC)",
        phone: "918248013879"
    },
    {
        name: "P SELVARAJ",
        role: "Insurance Advisor",
        agentId: "Insurance Advisor | Agent ID: 78871B",
        tagline: "Expert guidance for life, health and general insurance solutions.",
        image: "assets/logo-1/ad-2-2.png",
        specialization: "Specializes in Health & General Insurance",
        phone: "918778747430"
    }
];

function selectAdvisor(index) {
    if (activeAdvisor === index) return;
    activeAdvisor = index;
    const current = advisorData[activeAdvisor];

    // Update UI State (Pill Buttons)
    document.querySelectorAll('.pill-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });

    // Smooth transition for card content
    const displayArea = document.querySelector('.advisor-display-area');
    const heroContent = document.querySelector('.hero-content');

    [displayArea, heroContent].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'all 0.4s ease';
    });

    setTimeout(() => {
        // Update Glass Card Display
        document.getElementById('glassAdvisorImg').src = current.image;
        document.getElementById('glassAdvisorName').textContent = current.name;
        document.getElementById('glassAdvisorRole').textContent = current.role;
        document.getElementById('glassAdvisorSpec').textContent = current.specialization;

        // Update Left Side Hero Content
        document.getElementById('heroName').textContent = current.name;
        document.getElementById('heroRole').textContent = current.role;
        document.getElementById('heroAgentId').textContent = current.agentId;
        document.getElementById('heroTagline').textContent = current.tagline;

        // Update Hero Action Buttons Dynamically - Handled via event listeners using activeAdvisor index

        [displayArea, heroContent].forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 400);
}

// Initialize Event Listeners
// Initialize Event Listeners
console.log('Main.js loaded');

// Hero Actions
document.getElementById('heroCallBtn')?.addEventListener('click', () => {
    console.log('Hero Call clicked');
    handleCtaCall(advisorData[activeAdvisor].phone);
});

document.getElementById('heroWhatsAppBtn')?.addEventListener('click', () => {
    handleCtaWhatsApp(advisorData[activeAdvisor].phone);
});

// Advisor Selection
document.getElementById('btn-select-0')?.addEventListener('click', () => selectAdvisor(0));
document.getElementById('btn-select-1')?.addEventListener('click', () => selectAdvisor(1));

// Plan Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.getAttribute('data-provider');
        if (provider) switchTab(provider, this);
    });
});

// CTA Modal Interactions
document.getElementById('ctaModalOverlay')?.addEventListener('click', handleCtaOutsideClick);
document.querySelector('.cta-close-btn')?.addEventListener('click', closeCtaModal);
document.getElementById('btn-advisor-1')?.addEventListener('click', () => handleCtaAction('918248013879'));
document.getElementById('btn-advisor-2')?.addEventListener('click', () => handleCtaAction('918778747430'));

const fallbackBtns = document.querySelectorAll('#cta-fallback-container .cta-action-btn');
fallbackBtns.forEach(btn => {
    if (btn.textContent.includes('Copy')) {
        btn.addEventListener('click', copyCtaNumber);
    } else if (btn.textContent.includes('WhatsApp')) {
        btn.addEventListener('click', () => handleCtaWhatsApp(currentCtaSelectedNumber));
    }
});

console.log('App initialized');
