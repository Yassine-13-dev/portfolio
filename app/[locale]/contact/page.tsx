export default function ContactPage() {
  return (
    <section className="max-w-md">
      <h1 className="text-2xl font-medium text-ink">Contact</h1>
      <p className="mt-2 text-ink/70">
        Une question, une opportunité ? Écris-moi directement.
      </p>

      <form
        action="https://formspree.io/f/TON_ID_FORMSPREE"
        method="POST"
        className="mt-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Ton nom"
          required
          className="rounded-lg border border-ink/10 px-4 py-2 text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Ton email"
          required
          className="rounded-lg border border-ink/10 px-4 py-2 text-sm"
        />
        <textarea
          name="message"
          placeholder="Ton message"
          required
          rows={5}
          className="rounded-lg border border-ink/10 px-4 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}