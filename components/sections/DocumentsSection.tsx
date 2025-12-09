import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { documentsData } from '@/lib/data/documents';
import DocumentCard from '../cards/DocumentCard';

const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle title="Documents" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentsData.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;