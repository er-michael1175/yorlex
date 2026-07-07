/**
 * Image catalog for the Yorlex website.
 *
 * Centralises every rendered image with its role (content vs decorative) and alt
 * text so accessibility rules are enforced in one place:
 * - Content images (role: "content") → alt text 1-125 chars describing the image.
 * - Decorative images (role: "decorative") → alt = "" (empty string).
 */

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  role: "content" | "decorative";
  /** content => 1..125 chars; decorative => "" */
  alt: string;
}

// ---------------------------------------------------------------------------
// Local public images
// ---------------------------------------------------------------------------

const heroBackground: ImageAsset = {
  src: "/hero-bg.png",
  width: 1200,
  height: 630,
  role: "decorative",
  alt: "",
};

const fileSvg: ImageAsset = {
  src: "/file.svg",
  width: 24,
  height: 24,
  role: "decorative",
  alt: "",
};

const servicesHero: ImageAsset = {
  src: "/images/services/hero.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const leadershipHero: ImageAsset = {
  src: "/images/about/leadership-hero.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const serviceTechnology: ImageAsset = {
  src: "/images/services/technology.jpg",
  width: 1400,
  height: 787,
  role: "decorative",
  alt: "",
};

const serviceFinance: ImageAsset = {
  src: "/images/services/finance.jpg",
  width: 1400,
  height: 934,
  role: "decorative",
  alt: "",
};

const serviceMarketing: ImageAsset = {
  src: "/images/services/marketing.jpg",
  width: 1400,
  height: 934,
  role: "decorative",
  alt: "",
};

const serviceManagement: ImageAsset = {
  src: "/images/services/management.jpg",
  width: 1400,
  height: 910,
  role: "decorative",
  alt: "",
};

const serviceSupport: ImageAsset = {
  src: "/images/services/support.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const aboutVision: ImageAsset = {
  src: "/images/about/vision.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const aboutStructuralIntegrity: ImageAsset = {
  src: "/images/about/structural-integrity.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const aboutCalculatedVelocity: ImageAsset = {
  src: "/images/about/calculated-velocity.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const aboutAccountability: ImageAsset = {
  src: "/images/about/accountability.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const careersGlobalMobility: ImageAsset = {
  src: "/images/careers/global-mobility.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const careersUpskilling: ImageAsset = {
  src: "/images/careers/upskilling.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const careersArchitecturalImpact: ImageAsset = {
  src: "/images/careers/architectural-impact.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const engagementTimeMaterials: ImageAsset = {
  src: "/images/engagement/time-materials.jpg",
  width: 1400,
  height: 670,
  role: "decorative",
  alt: "",
};

const engagementFixedPrice: ImageAsset = {
  src: "/images/engagement/fixed-price.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const engagementSuccessFees: ImageAsset = {
  src: "/images/engagement/success-fees.jpg",
  width: 1400,
  height: 933,
  role: "decorative",
  alt: "",
};

const globeSvg: ImageAsset = {
  src: "/globe.svg",
  width: 24,
  height: 24,
  role: "decorative",
  alt: "",
};

const nextSvg: ImageAsset = {
  src: "/next.svg",
  width: 24,
  height: 24,
  role: "decorative",
  alt: "",
};

const vercelSvg: ImageAsset = {
  src: "/vercel.svg",
  width: 24,
  height: 24,
  role: "decorative",
  alt: "",
};

const windowSvg: ImageAsset = {
  src: "/window.svg",
  width: 24,
  height: 24,
  role: "decorative",
  alt: "",
};

// ---------------------------------------------------------------------------
// Partner logos (content images — they convey brand identity)
// ---------------------------------------------------------------------------

const financeLogo: ImageAsset = {
  src: "/logos/finance-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Financial Institution partner logo",
};

const healthcareLogo: ImageAsset = {
  src: "/logos/healthcare-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Healthcare Crest partner logo",
};

const logisticsLogo: ImageAsset = {
  src: "/logos/logistics-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Logistics Company partner logo",
};

const manufacturingLogo: ImageAsset = {
  src: "/logos/manufacturing-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Manufacturing Conglomerate partner logo",
};

const retailLogo: ImageAsset = {
  src: "/logos/retail-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Retail Brand partner logo",
};

const techLogo: ImageAsset = {
  src: "/logos/tech-logo.png",
  width: 120,
  height: 28,
  role: "content",
  alt: "Tech Enterprise partner logo",
};

// ---------------------------------------------------------------------------
// Remote images (Google CDN) — used across service/industry/about pages
// ---------------------------------------------------------------------------

const financeHero: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARL4WAeP0d1O_zIEUwN9TobXVJneuO27dD5bcSxmCTTaVCWcjkWtkLPXeDTOXblmXron2tpIqwqVkJZQoqLsR8ywcqhLW9PA1Nge40TV1E3tjIGU8MoMrcYXiNm6EXwqhp0ALGGhjIs4qepgPYPWwR3-CrDuITV-AQA21hZwfvA0i_OeQjiJCvdcEgYFxH0TpHPerKvJGoIRF1SwomMeX8kDvFGduWWVProykJM6rcx0i-DGDe0wkA-jSAgJkIKgOIaZclNL1wnDE",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const technologyHero: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4l9fFE3rZ9c_JfcJNnFBZoZeYC9nhLzDnIKNAridBKf9zF5XXTk22uJFpbtxkqhVD_t3JRFoA9ndTjvpbLERJmI6hRge1khHRTmrf3pxrV_30_Chp4fNHt_CYedwWcMEmI9JPyj1XUhb1WSQW7bnB5I96V3kshYQJb5KGsOesdKQLeUdoZvpWyOaSWvcpuKdOmUBdeYps2iqY3XSvo6S-3O4Ea_vw3aNKoapO7V6_xw8y5VVo2OeG0wzzpXpft2L_h0r2oBraDU",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const managementHero: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ifF9DQwo4w9bTKAKTYt8_4bgkMB4-ubE7WuEuNVZm2pbdyWbF2DsZQSO8b_KQAySkuW2RXKefZQKBU7l7v8nHNAAr0hd2HX3fRBW9yUPiDw94mGxsdfcAMPZTqOvARmWjzJT-IUAw-PU2MxaRO9jSIEfQE0-f1r3uXYNNIXFd59R8Azeea8vAn8Hiui1oZof6jdFB4aiYM5qsg0U9mmuNFayY_324_uMReqXXwZ94t5JRGKEpLp-n1niG6V0VFlXh1bSF9azHd0",
  width: 1200,
  height: 800,
  role: "content",
  alt: "Executive board room team meeting",
};

const marketingHero: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD1sCUesK1uACAIICOtSszWFchmXU0QOeDTtodV0DcyO7hmRhoVJySy3faO05_VeBLm0MgAvzdJmvGOhY5NvbQjnqiTYza07nmljDOF1T-n2PigQOuBcYUzZv7g6M0PNfKpUivh25d8FS8YVn-zWm0gcy41QVc4MQLRrbxSLHw6JgvvLQuuZeO_pNtOuuMUTyITgOAHkJasJ1XUxAvYj7JOiQV6kt-P914U8x0e73fomj-3hAaiK4up6pRlac7nj99BUHO8ud76j8",
  width: 1200,
  height: 800,
  role: "content",
  alt: "Brand mockups layout",
};

const servicesOverviewBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2iqUpzCKjZZv1VTCotJecfGk39Am1RLBBjH8v1N2NNjqM3uao_Br3GO-1BN2ax-bBbcoN4k7TXVVYMD6iSc9KrAMfpovHR833mvaORNc3K7i8lENw-hbDdV-8CcMm8YO-kk9e3zzH_KIbfV5RfgGhCvk62K9ExJj2bFoavGNv_v7XPeIwaa677YSam7tSFp9Jo8yd00hov4oi9iLrSC1exrLTwzWf9Rr4XTp9tq-baop1pxSaIkTcU3HtaVbCbu5OxjVux3koOU",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const industriesFinancialBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EWzji4eT2RZRX0lNDQLOggG7LWE3xAvgWhPWonGpIjwkCubEm5jLCjG4gYt9TA6gZjjagutVgAmF_Qb-80qpTWI4t9OS4TB_pVNI-_CuoGJ-08Va3oPuBZ3PyY9lz8ie-Zi3Ro4VQuUXPg3MRjWP5rAC82h9ughhIs_6syBv3PoUHZtzDzNmvgHnb7odvkVSO5FCja9yI_qXwAD9mZprodw8mCyU5dmxRCw1TYWtlZhHykEIg5zrq9tbuk7wDR1OP50jArlvKRU",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const industriesManufacturingBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfuWjj0j2yiZwZZ87GvsojmGN8JTiCfNk-j0pBTqDxfjHFfxLBw0AsgnzGWHtvl6SLg7nHgdLwY2vrsrgHjuhOyfZR3TaLh8RERQK4mhXFpwySsDW2a0et1GMvqw9vJmA1TINjWYuCswy7z0wnRXq1IinAnWAuMCqZL6PQ2IRZQ2hM8lfjPQlLbgbOmExmfIwquJwIM78BRJPLLLHP6iLhzfyyuh3z2mW_n0Vw67_1sApCoyBZfh9eo9emFcmkj8FegQS8nuoKGBQ",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const industriesLogisticsBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0AyezMsZHSznriXOHvtg4k6hQukKgrnC2RKfvztm-axXY7M7KnLYR0kNNVTz_SBdmO_nbpUo5Xu_Y3-ztNMWx-Tk6cchzOfexST3yJ81BmTDsuql_HswnLHzkD5244sUTVggkG9NZZKBh_oye-8Ev_7NiNWM9uRZt_UMC_w18tBm8MVFNnyLKvgQWYukPKJMgOsABOsdnc9u1LLMWPyid8oZDLzYKcMWCGQQmDDwhpGeuLeAcbxacXCQcuzL4KP-PacfRfME_LSQ",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const engagementModelsBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSbOCKJ0LBVIRNOyjG8PYlYV7ShUNUZ-yY4AF99Xof9EsoVKg6Y3uGZhSEot8aDCYeKpocStPAWxI6EP5AUjMXN1Jq58hQqH2R7n-FSaaotTgBkk6RPdkqYkxO3ibWrcAjPYi-PJmdwo0Fp6oVebuwCxuRwVM4bWtab4VFFQDpq4YzvplHiJosVnur2g25KOXvklbBNVKnN8vWRrMrpY7KZN1IqJDiRVngZg8I2YWLDK1shfZyevp1cnVcglPSKM81Jh1c7KCDpQk",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const engagementModelsVisualization: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCvWssENLIBkulyPyxN6ymGGMXbx1DX_a8VmX8tB-mPVOEvlU6nQCgQwFLILlf1Am7y6ELGAVIwxfA8bwRwbsZvtVHiJU5fU0bzh6uy35PuN3w2wLMcavb1DThfOCX8Hy9KQnuDO5QWjaTBM5i4XaE-9xtzdcfIfSNDxDh4DgNZufibMal3C2rBcqqV5lAcBywUJCce5zDodQJFnAa8bKuT9XuuHGDNJrwgD-uNzFGpsAHA70tEF7oOiN6DMOuGdY8TNV9i7JUWfQ",
  width: 600,
  height: 400,
  role: "content",
  alt: "Analytical model visualization",
};

const contactMapImage: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pk-SOUaMX24GEvA17CbSHN-EYpVH7W4dwDCtIj2IyTqy3xaCeCPDCVsxbAbGRaRL4HImAjlnKOe7cuhQMLC82xHJbRUfH-VMdh6uumW_Y8mfCK4LAvIJB3fFbGPSoJnaUVCYMAGnM9VtOWBjAzrQd8-Zl3bY74rN8-k-Z8PBfz3-7IapdWu79gn4Kmx7PgdK6E0asyMJDszqAepLfojXyGUT7GEhPYcqWxMaj6c3pNOWdkV3F9WJeZo_ERqFZrit4pEHio211JI",
  width: 800,
  height: 600,
  role: "decorative",
  alt: "",
};

const revenueOptimizationHero: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDv6mt1eCTz6LhtHsKEpL5n_8PmoxqxQV9rHnXP7OUJrYm0krNI_tewNuwHYQq-UPOMGY1RnDCnr33B6dA6JIkxOAqnJ4OunwfJgb49pNY0ZA44CQgOIdAPmeaC6lVkp9XJ0rHGJrjq-luFE_OnvJpe3BIeRbbfiFjACJ4kgl5OjD83BY98hnKQ_xL3cm2Fgk0j6PUehA3xDnmt6Vgu0BOHMj5knUleqV91TaDISntlYTNraaWbMWd3Vxqe0DWCHbLcSVA1OdXWZw",
  width: 1200,
  height: 500,
  role: "content",
  alt: "Digital installation art representing data optimization",
};

const revenueOptimizationArchitecture: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa2eXm6hwOPyrbnYYkz5QZk0azVMyS1odse_dGKvXa2psEfxHIp6vnuLRvfBiQj4P4w7cZTxEZ9mvvtuiJLiPvwFttX1LzEoiXVVoTvwRzUv0iV0dBZGha0G1ixnxN4GZJWaQTheLnyLvgq4q9_sTStmKJX1CRHoOJgQC2twLaAodEZeVXNVF8NQk8cL9CAm_zzPohQ-R238DJe0htYAAGDXk3ApAWaiTkVhcreUZOSx6fn9BhwVDGSUxtXR85HmcZxAiR7LpYbyM",
  width: 800,
  height: 600,
  role: "content",
  alt: "Decentralized data architecture wireframe blueprint",
};

const revenueOptimizationPortrait: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC9HHAtYMF70NjI1C6fjPn50GHlF2dHKGPaqFgUXJ7c7-Knq6UgborMSgbY-_BcfxEp11TjhiBb_GH6h0oBplAb5-7PJnuMIo7Tu6ka8B4iXomHLUDArrA9yidB_6Xhag4Nf-8pc_9pINrykoztVR3M5EY74KE9f20FmrwbgFeLZgHKXqEPLDPXOMO5OEzFWk2IxsiS342FLjvzWKs52t88uGn2aol5RC0Sw77scXp7Mpa-Gn0WVpl0WSmU7CB4JT8OqJ03kt5jzk",
  width: 200,
  height: 200,
  role: "content",
  alt: "Sarah Jenkins professional portrait",
};

const aboutHeroBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzGVaFWO8xTsLPEAGL8g2sk2z_Aud0srPIALl-wfG_2bgMxuBcgyudZ9WcEXnoHnUMmp55vdDCB18m6mJSovBJaVFCJc_Txrhv10omuRrMpVuklI9yOzjjhk3yJahq9syLT3xCzcftJgFgJRpb93RytMnqAu63v-BUp68bGOUttcyfjDU3lih8sPhDltkY71ip2Z7xrwPxpjm7gjXwV59aGzsljwOp6dJ-_TOBeoYI6nRWWY4r0lPys6GjD6F0SihrtA8IYejfOaY",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const aboutOfficeImage: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxZF7gsnuQwuJqu9PORT7e8EFaBriDHJHwU2-gSNT9bLNLQFQV4WmLxGXYMVj_ya8dImsd7QzBV4zFV3Fz4p0jdcihQaNkp2zNepzA87h8Eu4Cuk2K9NsvQeX2HlMHtnkHb93t9aAM-3u5t8dfyap5H2Sao3FAGp1Ycc4plr3Z5uYTIuQ5l4DL_Nb2siHg1A-qMGKHR_DPy3extd1GDL71_I7r-Gm_mQdn0SyTr9REHXb4gofztyyEuGhZvXepg3uoD7FyY8yOI0Q",
  width: 600,
  height: 400,
  role: "decorative",
  alt: "",
};

const aboutSarahJenkins: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIU8-ISzYnUTsIKVlq7Ysd8PZfNCo_CtBEWHNMx0ZCSEaZSFibWr_mS1r-B6QV3RgRfAapuxBntPOn7gB27-jVmat9drdNxGTgcH2ub760G6OCHBC1jlKpWdnvRQ7GDU2e1Sash_pbqKGwBB6H_lGYK9eWbup1bSj-EbqV8Hqdqeq0aa96PpeOFmnNjfP-8knGv2X2mar3rcRnol0NZBl7gyYpqXYtKZY4sVjozcwPgFDkLpyRsXVD19GHsOdHmcZvOD31SB1TO6U",
  width: 400,
  height: 400,
  role: "content",
  alt: "Sarah Jenkins, Chief Executive Officer",
};

const aboutMarcusVance: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChEcfRtsjFIqQu2Ys37wpxOc9VIU6l2DYhfSjDhGxdikWNt4d-FctplcH8BbMTT3IzjRbv7-ypd1DLm8BJiI4IcpClTTQjO8Sor2NmYskdaNDUYdbHY1mj09i84bpQ9QkkeYSTrRMU_-JqozAMq2V4TtI3q6_9sLm_8_vG-gWQVJn0Kv73bEwviBp-egYY5NXM3vBl99aVnIkLVaJV8QF79j0eFYRxaAxtm_8vQZ01hlSe8xPwqjbEgh7kwKKpa0rF539AXkyUIxY",
  width: 400,
  height: 400,
  role: "content",
  alt: "Marcus Vance, Chief Operating Officer",
};

const careersHeroBg: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_opwp7Ejy2le3wK5pqApFPdhjIdv22l8ILZdl0Fnf1t-NmaTOz4M_ZS_rDlyBMoh4g-qxvZbC2ZyIuIpOEF0d7QVpcFZo4-mMam9N7ezSIUx9sPekumZrKXVtoepkxxW_qK0Yzt1AB9Chh6tcAcItJJd2FlcCT4kLhd-JCqSCW0sotkEaes0SK82bwzeTpcbDVVmw4JrlznbIV81t_-rrh6Gc4T1B7WZt7rHmKXduFf6TciTsrU4tuiajfJvaOZHtOTzDUOtUxOQ",
  width: 1200,
  height: 800,
  role: "decorative",
  alt: "",
};

const careersTeamImage: ImageAsset = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuvyfefpvBmRpVP6fGEjtovO5uLS68wxYxId2TUhnbsrlbDAKDHpOiPBR6DS8tmB-w3mo0MfkE5OCXDpDo1M-wjJEw2Nt2rtQGGLcs_shClr396_1Y7Xxv96Lu78P71Gw6dU5e37SMaxjMwblAW2aawLHq36PWvGM1pVso28vbjcqi604sx7SIMTZeSEWN25hf8hqTP-1drCQYZrQUXm4IPbknjsdIVEzFXHU_zZwMEF1VLT-wlIKAWhS4U8ngn0DrLivg3jIbS2M",
  width: 600,
  height: 400,
  role: "decorative",
  alt: "",
};

// ---------------------------------------------------------------------------
// Complete catalog
// ---------------------------------------------------------------------------

export const IMAGE_CATALOG: readonly ImageAsset[] = [
  // Local public images
  heroBackground,
  fileSvg,
  globeSvg,
  nextSvg,
  vercelSvg,
  windowSvg,

  // Local images — page hero visuals
  servicesHero,
  leadershipHero,

  // Local images — home page services grid
  serviceTechnology,
  serviceFinance,
  serviceMarketing,
  serviceManagement,
  serviceSupport,

  // Local images — about page core directives
  aboutVision,
  aboutStructuralIntegrity,
  aboutCalculatedVelocity,
  aboutAccountability,

  // Local images — careers page advantage cards
  careersGlobalMobility,
  careersUpskilling,
  careersArchitecturalImpact,

  // Local images — engagement models cards
  engagementTimeMaterials,
  engagementFixedPrice,
  engagementSuccessFees,

  // Partner logos
  financeLogo,
  healthcareLogo,
  logisticsLogo,
  manufacturingLogo,
  retailLogo,
  techLogo,

  // Remote images — service pages
  financeHero,
  technologyHero,
  managementHero,
  marketingHero,
  servicesOverviewBg,

  // Remote images — industries page
  industriesFinancialBg,
  industriesManufacturingBg,
  industriesLogisticsBg,

  // Remote images — engagement models
  engagementModelsBg,
  engagementModelsVisualization,

  // Remote images — contact
  contactMapImage,

  // Remote images — success stories
  revenueOptimizationHero,
  revenueOptimizationArchitecture,
  revenueOptimizationPortrait,

  // Remote images — about
  aboutHeroBg,
  aboutOfficeImage,
  aboutSarahJenkins,
  aboutMarcusVance,

  // Remote images — careers
  careersHeroBg,
  careersTeamImage,
] as const;
