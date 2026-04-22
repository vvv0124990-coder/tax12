from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = PROJECT_ROOT / "downloads"
FONT_PATH = Path("C:/Windows/Fonts/malgun.ttf")


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Malgun", str(FONT_PATH)))
    pdfmetrics.registerFont(TTFont("Malgun-Bold", str(FONT_PATH)))


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="FormTitle",
            fontName="Malgun-Bold",
            fontSize=20,
            leading=26,
            textColor=colors.HexColor("#10203C"),
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="FormMeta",
            fontName="Malgun",
            fontSize=9,
            leading=14,
            textColor=colors.HexColor("#5C6D8A"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            fontName="Malgun-Bold",
            fontSize=11,
            leading=16,
            textColor=colors.HexColor("#154F9D"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            fontName="Malgun",
            fontSize=9.5,
            leading=15,
            textColor=colors.HexColor("#27364F"),
        )
    )
    return styles


def form_header(styles, title: str, subtitle: str):
    return [
        Paragraph(title, styles["FormTitle"]),
        Spacer(1, 4),
        Paragraph(subtitle, styles["FormMeta"]),
        Spacer(1, 12),
    ]


def info_table(rows):
    table = Table(rows, colWidths=[36 * mm, 58 * mm, 36 * mm, 48 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#EDF4FF")),
                ("BACKGROUND", (2, 0), (2, -1), colors.HexColor("#EDF4FF")),
                ("FONTNAME", (0, 0), (-1, -1), "Malgun"),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#27364F")),
                ("FONTNAME", (0, 0), (0, -1), "Malgun-Bold"),
                ("FONTNAME", (2, 0), (2, -1), "Malgun-Bold"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    return table


def checklist_table(items):
    rows = [["점검 항목", "확인란", "비고"]]
    for item in items:
        rows.append([item, "□", ""])
    table = Table(rows, colWidths=[120 * mm, 22 * mm, 38 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#154F9D")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Malgun-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 9),
                ("ALIGN", (1, 0), (1, -1), "CENTER"),
                ("BOX", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("FONTNAME", (0, 1), (-1, -1), "Malgun"),
                ("FONTSIZE", (0, 1), (-1, -1), 9),
                ("TEXTCOLOR", (0, 1), (-1, -1), colors.HexColor("#27364F")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def ledger_table(headers, row_count, widths):
    rows = [headers]
    rows.extend([["" for _ in headers] for _ in range(row_count)])
    table = Table(rows, colWidths=widths, hAlign="LEFT", repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#F2F7FF")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor("#154F9D")),
                ("FONTNAME", (0, 0), (-1, 0), "Malgun-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 8.8),
                ("FONTNAME", (0, 1), (-1, -1), "Malgun"),
                ("FONTSIZE", (0, 1), (-1, -1), 8.5),
                ("TEXTCOLOR", (0, 1), (-1, -1), colors.HexColor("#27364F")),
                ("BOX", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("INNERGRID", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 18),
            ]
        )
    )
    return table


def note_box(text: str):
    table = Table([[text]], colWidths=[180 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F8FBFF")),
                ("BOX", (0, 0), (-1, -1), 0.75, colors.HexColor("#D6E2F2")),
                ("FONTNAME", (0, 0), (-1, -1), "Malgun"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#5C6D8A")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def build_spending_evidence_form(styles):
    story = []
    story.extend(
        form_header(
            styles,
            "지출증명서류수취검토서",
            "공식 참고: 국세청 법인세 참고자료실 / 국가법령정보센터",
        )
    )
    story.append(
        info_table(
            [
                ["법인명", "", "사업연도", ""],
                ["사업자등록번호", "", "작성일", ""],
                ["작성부서", "", "검토자", ""],
            ]
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("기본 점검 항목", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        checklist_table(
            [
                "건당 거래금액 3만원 초과 여부를 확인하였다.",
                "법정지출증명서류 수취 여부를 확인하였다.",
                "지출증명서류 수취 특례 해당 여부를 검토하였다.",
                "개인사업자인 경우 영수증수취명세서 제출 여부를 확인하였다.",
                "직전 사업연도 수입금액 30억원 이상 법인 해당 여부를 확인하였다.",
            ]
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("거래별 검토 내역", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        ledger_table(
            ["거래일자", "거래처", "지출내용", "금액", "수취증빙", "특이사항"],
            6,
            [24 * mm, 34 * mm, 42 * mm, 22 * mm, 28 * mm, 30 * mm],
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("검토 의견", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        ledger_table(
            ["구분", "내용"],
            3,
            [28 * mm, 152 * mm],
        )
    )
    story.append(Spacer(1, 12))
    story.append(
        note_box(
            "본 PDF는 국세청 신고 참고자료를 기준으로 사이트에서 바로 내려받아 사용할 수 있도록 정리한 검토용 서식입니다. "
            "공식 원문 확인은 국세청 법인세 참고자료실과 국가법령정보센터 링크를 함께 참조하세요."
        )
    )
    return story


def build_card_and_gift_form(styles):
    story = []
    story.extend(
        form_header(
            styles,
            "신용카드 및 상품권 등 사용내역 검토서식",
            "공식 참고: 국세청 통합검색 / 국세청 법인세 참고자료실",
        )
    )
    story.append(
        info_table(
            [
                ["법인명", "", "사업연도", ""],
                ["카드 또는 상품권 구분", "", "작성일", ""],
                ["사용부서", "", "검토자", ""],
            ]
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("사용내역 검토표", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        ledger_table(
            ["일자", "사용자", "사용처", "금액", "카드·상품권", "계정과목", "업무관련 여부", "비고"],
            6,
            [18 * mm, 18 * mm, 28 * mm, 18 * mm, 24 * mm, 24 * mm, 26 * mm, 24 * mm],
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("점검 체크리스트", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        checklist_table(
            [
                "법인카드 또는 적정한 사용 권한이 있는 수단으로 집행하였다.",
                "사적 사용 또는 업무무관 사용을 제외하였다.",
                "접대비, 복리후생비, 일반경비 등 계정과목을 적정하게 구분하였다.",
                "증빙자료와 사용내역이 서로 일치하는지 확인하였다.",
                "상품권 사용 시 수불 관리 및 귀속 부서를 확인하였다.",
            ]
        )
    )
    story.append(Spacer(1, 14))
    story.append(Paragraph("종합 검토 의견", styles["SectionTitle"]))
    story.append(Spacer(1, 6))
    story.append(
        ledger_table(
            ["구분", "내용"],
            3,
            [28 * mm, 152 * mm],
        )
    )
    story.append(Spacer(1, 12))
    story.append(
        note_box(
            "본 PDF는 국세청 2026 자기검증 검토서식 안내를 기준으로 사이트에서 바로 사용할 수 있도록 정리한 검토용 서식입니다. "
            "실제 제출 또는 세무처리 전에는 공식 출처 링크를 통해 최신 자료를 확인하세요."
        )
    )
    return story


def create_pdf(path: Path, story):
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        topMargin=16 * mm,
        bottomMargin=14 * mm,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
    )
    doc.build(story)


def main():
    DOWNLOADS_DIR.mkdir(parents=True, exist_ok=True)
    register_fonts()
    styles = build_styles()

    create_pdf(DOWNLOADS_DIR / "review-form-spending-evidence.pdf", build_spending_evidence_form(styles))
    create_pdf(
        DOWNLOADS_DIR / "review-form-card-gift-certificate.pdf",
        build_card_and_gift_form(styles),
    )


if __name__ == "__main__":
    main()
