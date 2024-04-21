'use client';

import { AlertDialogDemo } from '@/components/AlertDialogSample';
import { DialogCloseButton } from '@/components/DialogSample';
import ReactAlertSample from '@/components/ReactAlertSample';

export default function Home() {
  return (
    <main className="bg-gray-200 font-sans">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="hover:multi-['bg-red-500;text-white'] text-center text-4xl font-bold text-red-500">
          When hovered, this text is white and the background is red.
        </h1>
      </div>
    </main>
  );
}
