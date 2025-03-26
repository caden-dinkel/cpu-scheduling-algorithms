import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export const exportAsPDF = async (
  pdfRef: React.RefObject<HTMLDivElement | null>,
  fileName: string = "simulation.pdf"
) => {
  if (!pdfRef.current) return;

  // Capture the div as an image
  const canvas = await html2canvas(pdfRef.current, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  // Create a PDF document
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
};
