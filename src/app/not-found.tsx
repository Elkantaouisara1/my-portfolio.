import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink">Page introuvable</h1>
      <p className="mt-3 max-w-md text-ink/70">
        Ce lien n’existe pas. Revenez à l’accueil pour parcourir le portfolio.
      </p>
      <Button href="/" className="mt-8">
        Retour à l’accueil
      </Button>
    </div>
  );
}
