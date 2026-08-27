'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  CircleAlert,
  Clock3,
  LockKeyhole,
  Menu,
  Network,
  Phone,
  ScanLine,
  ShieldCheck,
  Smartphone,
  WalletCards,
  X,
} from 'lucide-react'

const issues = [
  { icon: WalletCards, title: 'Account & login', text: 'Niet kunnen inloggen, account beperkt of wachtwoord vergeten.' },
  { icon: Clock3, title: 'Transactie blijft hangen', text: 'Bekijk bevestigingen, netwerkdrukte en uw TXID.' },
  { icon: Network, title: 'Verkeerd netwerk', text: 'Controleer adres, asset en blockchain-netwerk.' },
  { icon: ScanLine, title: 'Verificatie & opname', text: 'Veilige stappen bij KYC-, stortings- of opnameproblemen.' },
]

const faqs = [
  ['Waarom werkt mijn crypto-account niet?', 'Controleer uw internetverbinding, logingegevens, accountstatus en eventuele beveiligingsmeldingen. Gebruik daarna de officiële accountondersteuning of bezoek onze <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">Helpdesk</a>.'],
  ['Waarom staat mijn crypto-transactie nog op verwerken?', 'Dit kan te maken hebben met blockchainbevestigingen of netwerkdrukte. Controleer de transactie-ID en de officiële status van het platform via de <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">officiële helpdesk</a>.'],
  ['Kan een crypto-transactie worden teruggedraaid?', 'Een blockchaintransactie kan doorgaans niet eenvoudig worden teruggedraaid. Controleer daarom altijd het adres en netwerk voordat u bevestigt.'],
  ['Mag Crypto Klantenservice mijn seed phrase vragen?', 'Nee. Deel uw seed phrase of private key nooit met iemand die beweert dat hij uw account moet herstellen. Raadpleeg bij twijfel altijd direct de .'],
]

export function CryptoHelpPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center font-mono text-[11px] tracking-[0.12em] text-primary-foreground">
        ONAFHANKELIJKE INFORMATIEGIDS · DEEL NOOIT GEHEIME GEGEVENS
      </div>

      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Crypto Hulp Nederland home">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck size={21} />
            </span>
            <span>
              <strong className="block text-sm tracking-tight">Crypto Hulp</strong>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Nederland
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Hoofdnavigatie">
            <a href="#problemen" className="transition-colors hover:text-primary">Problemen</a>
            <a href="#veiligheid" className="transition-colors hover:text-primary">Veiligheid</a>
            <a href="#vragen" className="transition-colors hover:text-primary">Veelgestelde vragen</a>
            <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary font-semibold">Helpdesk</a>
          </nav>

          <a href="#veiligheid" className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground md:flex">
            Check voor veiligheid <ArrowRight size={15} />
          </a>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 text-sm md:hidden">
            <a href="#problemen" onClick={() => setMenuOpen(false)}>Problemen</a>
            <a href="#veiligheid" onClick={() => setMenuOpen(false)}>Veiligheid</a>
            <a href="#vragen" onClick={() => setMenuOpen(false)}>Veelgestelde vragen</a>
            {/* <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer">Officiële Helpdesk</a> */}
          </nav>
        )}
      </header>

      <section id="top" className="relative border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              <span className="size-2 rounded-full bg-accent" /> Heldere hulp bij crypto-problemen
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Crypto werkt niet? <span className="text-primary">Begin hier.</span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
              Praktische informatie over accounts, wallets, transacties en verificatie. Leer eerst wat u zelf veilig kunt controleren — zonder uw gegevens aan iemand af te staan. Voor verdere ondersteuning kunt u ook terecht bij onze <a href="https://help.crypto.com/nl/" target="_blank" rel="noopener noreferrer" className="underline text-primary">officiële helpdesk</a>.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#problemen"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Vind uw probleem <ArrowRight size={16} />
              </a>
              {/* <a
                href="https://helpdeskbellennummer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Bezoek Helpdesk
              </a> */}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-primary" /> Onafhankelijke gids
              </span>
              <span className="flex items-center gap-2">
                <LockKeyhole size={15} className="text-primary" /> Geen gegevens nodig
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-2xl shadow-primary/15 sm:p-9">
              <CircleAlert className="mb-12 text-accent" size={32} />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/60">De gouden regel</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
                Een echte helpdesk vraagt nooit om uw seed phrase.
              </h2>
              <p className="mt-5 leading-7 text-primary-foreground/70">
                Ook niet om uw wachtwoord, verificatiecode, private key of een betaling om crypto “vrij te geven”.
              </p>
              <div className="mt-8 border-t border-primary-foreground/15 pt-5 font-mono text-xs text-primary-foreground/60">
                Bewaar deze regel. Deel hem met iemand die crypto gebruikt.
              </div>
            </div>

            <a
              href="https://help.crypto.com/nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-primary bg-card p-4 text-center text-base font-bold text-foreground shadow-md transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Phone size={20} className="text-primary group-hover:text-primary-foreground" />
              <span>Contact via Officiële Helpdesk</span>
            </a>
          </div>
        </div>
      </section>

      <section id="problemen" className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Snel naar een oplossing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Waar loopt u tegenaan?</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Kies het onderwerp dat het beste bij uw situatie past.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {issues.map(({ icon: Icon, title, text }) => (
            <a
              key={title}
              href="#gids"
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <Icon className="text-primary" size={24} />
              <h3 className="mt-10 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              <ArrowRight className="mt-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" size={17} />
            </a>
          ))}
        </div>
      </section>

      <section id="gids" className="border-y border-border bg-secondary/45">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">De basis</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Controleer eerst. Handel daarna.</h2>
          </div>
          <div className="space-y-10">
            <article>
              <h3 className="text-xl font-semibold">Crypto-transactie is nog niet voltooid</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Een transactie kan langer duren door blockchainbevestigingen, netwerkdrukte of transactiekosten. Controleer de TXID via de officiële wallet of het platform. Zodra een transactie het netwerk heeft verlaten, kan deze meestal niet zomaar worden teruggedraaid. Vragen? Bezoek de
                 {/* <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">officiële helpdesk</a>. */}
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Crypto-wallet werkt niet</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Gebruik de officiële walletapp en houd deze bijgewerkt. Herstel uw wallet uitsluitend via de officiële procedure. Iedereen die uw seed phrase of private key heeft, kan mogelijk toegang krijgen tot uw crypto.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Opname of storting is niet zichtbaar</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Controleer netwerk, ontvangstadres, minimale hoeveelheid en transactie-ID. Stuur nooit extra crypto omdat iemand beweert dat uw eerdere storting eerst moet worden “vrijgegeven”.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="veiligheid" className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] bg-accent p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground/60">Veiligheid eerst</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-accent-foreground sm:text-4xl">
              Zo herkent u nep-klantenservice
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-accent-foreground/75">
              Gebruik alleen de officiële website of app van uw crypto-platform of neem contact op via onze <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">officiële helpdesk</a>. Zoek geen willekeurig telefoonnummer via pop-ups, advertenties of sociale media.
            </p>
          </div>
          <div className="mt-8 grid shrink-0 gap-3 text-sm font-medium text-accent-foreground lg:mt-0">
            <span className="flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-full bg-accent-foreground text-accent">1</span> Deel nooit geheime codes
            </span>
            <span className="flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-full bg-accent-foreground text-accent">2</span> Betaal nooit voor vrijgave
            </span>
            <span className="flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-full bg-accent-foreground text-accent">3</span> Controleer altijd de URL
            </span>
          </div>
        </div>
      </section>

      <section id="vragen" className="mx-auto max-w-3xl px-5 pb-20 lg:pb-28">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Veelgestelde vragen</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Antwoorden zonder ruis</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                aria-expanded={activeFaq === index}
              >
                {question}
                <ChevronDown size={18} className={`shrink-0 text-primary transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-muted-foreground" dangerouslySetInnerHTML={{ __html: answer }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-accent" />
              <strong>Crypto Hulp Nederland</strong>
            </div>
            <p className="mt-2 max-w-md text-sm leading-6 text-primary-foreground/60">
              Onafhankelijke informatie over veilig omgaan met crypto. Geen financieel advies en geen officiële klantenservice van een exchange. Bezoek onze <a href="https://help.crypto.com/nl/" target="_blank" rel="noopener noreferrer" className="underline text-primary-foreground">helpdesk</a> voor meer info.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-primary-foreground/60">
            {/* <Smartphone size={15} /> Gebruik altijd het <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary-foreground">officiële supportkanaal</a> */}
          </div>
        </div>
      </footer>
    </main>
  )
}

export default CryptoHelpPage