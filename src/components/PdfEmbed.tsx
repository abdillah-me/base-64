import React, { useEffect } from "react";

interface PDFViewerProps {
    base64: string;
}

const PdfEmbed: React.FC<PDFViewerProps> = ({ base64 }) => {
    useEffect(() => {
        const container = document.getElementById("pdf-container");

        // Clear previous content if any
        if (container) {
            container.innerHTML = ""; // This will remove all previous children elements
        }

        // Decode Base64 to binary
        const bin = atob(base64);
        console.log("File Size:", Math.round(bin.length / 1024), "KB");
        const versionMatch = bin.match(/^.PDF-([0-9.]+)/);
        console.log("PDF Version:", versionMatch ? versionMatch[1] : "Unknown");

        // Extracting metadata
        const createDateMatch = bin.match(
            /<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/
        );
        const modifyDateMatch = bin.match(
            /<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/
        );
        const creatorToolMatch = bin.match(
            /<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/
        );

        const createDate = createDateMatch ? createDateMatch[1] : "Unknown";
        const modifyDate = modifyDateMatch ? modifyDateMatch[1] : "Unknown";
        const creatorTool = creatorToolMatch ? creatorToolMatch[1] : "Unknown";

        console.log("Create Date:", createDate);
        console.log("Modify Date:", modifyDate);
        console.log("Creator Tool:", creatorTool);

        // Embed the PDF into the HTML page
        const obj = document.createElement("object");
        obj.style.width = "100%";
        obj.style.height = "842pt";
        obj.type = "application/pdf";
        obj.data = "data:application/pdf;base64," + base64;
        container?.appendChild(obj);

        // Insert a link that allows the user to download the PDF file
        // const link = document.createElement('a');
        // link.innerHTML = 'Download PDF file';
        // link.download = 'file.pdf';
        // link.href = 'data:application/octet-stream;base64,' + base64;
        // container?.appendChild(link);
    }, [base64]);

    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <div id="pdf-container"></div>
        </div>
    );
};

export default PdfEmbed;
