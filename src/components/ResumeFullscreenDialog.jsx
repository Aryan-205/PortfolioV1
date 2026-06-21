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
        className="fixed top-1/2 left-1/2 z-50 flex w-[min(600px,90vw)] max-w-none -translate-x-1/2 -translate-y-1/2 flex-col gap-0 overflow-hidden rounded-xl p-0 aspect-[210/297] sm:w-[min(700px,85vw)]"
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
