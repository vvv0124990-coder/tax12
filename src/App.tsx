import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  GUIDE_PAGE_DATA,
  type DisclaimerItem,
  type GuidePanel,
  type GuideSection,
  type LawCard,
  type ReviewFormLink,
} from "./content/guideContent";

type NavItem = {
  id: string;
  number?: string;
  label: string;
};

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
} as const;

function GuidePanelCard({ panel }: { panel: GuidePanel }) {
  return (
    <article className={`guide-panel guide-panel--${panel.tone ?? "default"}`}>
      {(panel.title || panel.lawLabel) && (
        <header className="guide-panel__head">
          {panel.title && <h3>{panel.title}</h3>}
          {panel.lawLabel && panel.lawUrl && (
            <a href={panel.lawUrl} target="_blank" rel="noreferrer" className="guide-panel__law-link">
              {panel.lawLabel}
            </a>
          )}
        </header>
      )}
      <div className="guide-panel__body" dangerouslySetInnerHTML={{ __html: panel.contentHtml }} />
    </article>
  );
}

function GuideSectionBlock({ section }: { section: GuideSection }) {
  return (
    <motion.section id={section.id} className="guide-section" {...SECTION_ANIMATION}>
      <div className="section-header">
        <span className="sec-num">{section.number}</span>
        <div className="section-header__copy">
          <h2>{section.title}</h2>
        </div>
      </div>

      <div className="section-panels">
        {section.panels.map((panel, index) => (
          <GuidePanelCard key={`${section.id}-${index}`} panel={panel} />
        ))}
      </div>
    </motion.section>
  );
}

function LawCardItem({ card }: { card: LawCard }) {
  return (
    <a className="law-card" href={card.url} target="_blank" rel="noreferrer">
      <div className="law-code2">{card.code}</div>
      <div className="law-name">{card.title}</div>
      <div className="law-desc">{card.description}</div>
      <span className="law-btn">{card.buttonLabel}</span>
    </a>
  );
}

function ReviewFormCard({
  form,
  assetBase,
}: {
  form: ReviewFormLink;
  assetBase: string;
}) {
  return (
    <article className="review-form-card">
      <div className="review-form-card__eyebrow">검토서식 PDF</div>
      <h3>{form.title}</h3>
      {form.note && <p>{form.note}</p>}
      <div className="review-form-card__actions">
        <a
          className="review-form-card__download"
          href={`${assetBase}${form.downloadPath}`}
          download={form.downloadFileName}
        >
          PDF 다운로드
        </a>
        <a className="review-form-card__source" href={form.officialUrl} target="_blank" rel="noreferrer">
          {form.officialLabel}
        </a>
      </div>
    </article>
  );
}

function DisclaimerCard({ item }: { item: DisclaimerItem }) {
  return (
    <article className="disclaimer-card">
      <span className="disclaimer-card__number">{item.number}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sec1");
  const assetBase = (window as Window & { __tax12AssetBase?: string }).__tax12AssetBase ?? "./";

  const navItems = useMemo<NavItem[]>(
    () => [
      ...GUIDE_PAGE_DATA.sections.map((section) => ({
        id: section.id,
        number: section.number,
        label: section.navLabel,
      })),
      { id: "law", number: "09", label: "관련 법령 전체 링크" },
    ],
    [],
  );

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.18, 0.32, 0.56] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [navItems]);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <button
            type="button"
            className="site-header__menu"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button type="button" className="site-header__brand" onClick={() => jumpTo("top")}>
            <span>{GUIDE_PAGE_DATA.brand}</span>
            <strong>{GUIDE_PAGE_DATA.brandAccent}</strong>
          </button>

          <nav className={`site-header__nav${isMobileMenuOpen ? " is-open" : ""}`} aria-label="상단 이동">
            {GUIDE_PAGE_DATA.navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`top-link${activeSection === link.id ? " is-active" : ""}`}
                onClick={() => jumpTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button type="button" className="site-header__cta" onClick={() => jumpTo("review-forms")}>
            {GUIDE_PAGE_DATA.reviewFormsTitle}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <motion.div
            className="hero-section__inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-kicker-wrap">
              <span className="hero-kicker-line" />
              <div className="hero-tag">{GUIDE_PAGE_DATA.hero.tag}</div>
              <span className="hero-kicker-line" />
            </div>

            <h1 dangerouslySetInnerHTML={{ __html: GUIDE_PAGE_DATA.hero.titleHtml }} />
            <p className="hero-desc">{GUIDE_PAGE_DATA.hero.description}</p>

            <div className="hero-pills" aria-label="핵심 키워드">
              {GUIDE_PAGE_DATA.hero.pills.map((pill) => (
                <span key={pill} className="pill">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="alert-banner">
          <div className="alert-banner-inner">
            <p dangerouslySetInnerHTML={{ __html: GUIDE_PAGE_DATA.alertHtml }} />
          </div>
        </section>

        <section className="section-rail" aria-label="문서 목차">
          <div className="section-rail__inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`section-rail__link${activeSection === item.id ? " is-active" : ""}`}
                onClick={() => jumpTo(item.id)}
              >
                {item.number && <span>{item.number}</span>}
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>
        </section>

        <div className="page-wrap">
          <div className="content">
            {GUIDE_PAGE_DATA.sections.map((section) => (
              <GuideSectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>

        <section className="reference-directory">
          <div className="reference-directory__inner">
            <div className="reference-directory__head">
              <div className="reference-directory__eyebrow">{GUIDE_PAGE_DATA.sidebarLawTitle}</div>
              <p>{GUIDE_PAGE_DATA.lawSectionSubtitle}</p>
            </div>
            <div className="reference-directory__grid">
              {GUIDE_PAGE_DATA.sidebarLawLinks.map((link) => (
                <a key={link.code} className="reference-quicklink" href={link.url} target="_blank" rel="noreferrer">
                  <span>{link.code}</span>
                  <strong>{link.label}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <motion.section id="law" className="law-ref-section" {...SECTION_ANIMATION}>
          <div className="law-ref-section__inner">
            <div className="law-ref-section__head">
              <div className="law-ref-section__eyebrow">Legal References</div>
              <h2>{GUIDE_PAGE_DATA.lawSectionTitle}</h2>
              <p>{GUIDE_PAGE_DATA.lawSectionSubtitle}</p>
            </div>

            <div className="law-cards">
              {GUIDE_PAGE_DATA.lawCards.map((card) => (
                <LawCardItem key={card.id} card={card} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="review-forms" className="review-forms-section" {...SECTION_ANIMATION}>
          <div className="review-forms-section__inner">
            <div className="review-forms-section__head">
              <div className="review-forms-section__eyebrow">Form Library</div>
              <h2>{GUIDE_PAGE_DATA.reviewFormsTitle}</h2>
              <p>{GUIDE_PAGE_DATA.reviewFormsDescription}</p>
            </div>

            <div className="review-forms-grid">
              {GUIDE_PAGE_DATA.reviewForms.map((form) => (
                <ReviewFormCard key={form.title} form={form} assetBase={assetBase} />
              ))}
            </div>

            <div className="review-forms-reference">
              <strong>{GUIDE_PAGE_DATA.reviewFormsReferenceLabel}</strong>
              <p>{GUIDE_PAGE_DATA.reviewFormsReferenceNote}</p>
              <a href={GUIDE_PAGE_DATA.reviewFormsReferenceUrl} target="_blank" rel="noreferrer">
                공식 서식 보기
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section id="disclaimers" className="disclaimers-section" {...SECTION_ANIMATION}>
          <div className="disclaimers-section__inner">
            <div className="disclaimers-section__head">
              <div className="disclaimers-section__eyebrow">Legal Notice</div>
              <h2>{GUIDE_PAGE_DATA.disclaimerTitle}</h2>
              <p>{GUIDE_PAGE_DATA.disclaimerDescription}</p>
            </div>

            <div className="disclaimers-grid">
              {GUIDE_PAGE_DATA.disclaimers.map((item) => (
                <DisclaimerCard key={item.number} item={item} />
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer>
        <div className="footer__inner">
          <div className="footer__brand-block">
            <div className="footer__brand">
              <span>{GUIDE_PAGE_DATA.brand}</span>
              <strong>{GUIDE_PAGE_DATA.brandAccent}</strong>
            </div>
            <p>
              <strong>{GUIDE_PAGE_DATA.footerLines[0]}</strong>
              <br />
              {GUIDE_PAGE_DATA.footerLines[1]}
              <br />
              {GUIDE_PAGE_DATA.footerLines[2]}
            </p>
          </div>

          <nav className="footer__nav" aria-label="하단 이동">
            {GUIDE_PAGE_DATA.navLinks.map((link) => (
              <button key={link.id} type="button" onClick={() => jumpTo(link.id)}>
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
