"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ResumeFullscreenDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="fixed inset-3 top-3 left-3 z-50 flex h-[calc(100vh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-xl p-0 sm:inset-4 sm:h-[calc(100vh-2rem)] sm:w-[calc(100vw-2rem)]"
      >
        <DialogTitle className="sr-only">Resume</DialogTitle>
        <iframe
          src="/resume.pdf"
          title="Aryan Bola Resume"
          className="h-full w-full flex-1 border-0 bg-white"
        />
      </DialogContent>
    </Dialog>
  );
}
