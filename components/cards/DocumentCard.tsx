import React from "react";
import { DocumentItem } from "@/lib/data/documents";
import { Eye } from "lucide-react";

interface DocumentCardProps {
  document: DocumentItem;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="group relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-all">
      
      {/* Thumbnail */}
      {document.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={document.thumbnail}
            alt={document.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <a
            href={document.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <Eye className="w-10 h-10 text-white" />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="px-6 py-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{document.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm flex-1">{document.description}</p>
        
        <a
          href={document.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
        >
          View Document
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;