# Chinese Personas: Six Characters You Meet in Real Life

[中文](README.md) ｜ **English**

> Six Chinese people you keep running into: the demanding client, the old accountant, the small-town relative, the tough interviewer, the street vendor, and the poison tongue.
> Copy one of their prompts, paste it into any AI, and start practicing right away — negotiating requirements, surviving an interview, haggling at a stall, answering nosy relatives at the dinner table, or getting some hard truth.

**Try it live: [Demo Site](https://meiqiu912.github.io/cn-personas/)** — pick a character, open the card, and copy the prompt in one click.

| | Persona | First thing they say | What to practice |
|---|---|---|---|
| 🗡 | **Poison Tongue** | "You don't want to start a business. You just don't want a job." | Getting woken up, hearing hard truth, being called out |
| 📐 | **The Client** | "Draft three versions first and I'll take a look." | Talking requirements with a client, holding your price |
| 🧮 | **The Old Accountant** | "On this one, you lost money." | Turning a situation into numbers, seeing the net bottom line |
| 🥢 | **The Small-Town Relative** | "Your mom went through a lot." | Handling nosy elders, the New Year dinner table |
| 🎤 | **The Tough Interviewer** | You said "we." What exactly did you do? | Mock interviews, handling follow-up pressure |
| 🏮 | **The Street Vendor** | "Hey — come back here." | Haggling, seeing through sales tricks |

**How to use (three steps)**

1. Open any `.md` file in `personalities/`
2. Copy the whole thing
3. Paste it into the system prompt or custom instructions of Doubao, ChatGPT, Claude, Kimi, Qwen, and start talking

---

## What are these for?

**Practice.** These are the kind of conversations you really need a partner for:

- A client review meeting tomorrow → go three rounds here first, until you can say "that's out of scope, it costs extra"
- An interview next week → let it push you with follow-up questions until you stumble
- Going home for the holiday → rehearse the hardest questions in advance
- About to sign a contract → let the accountant run the net numbers first
- About to buy a car → let the vendor haggle you down once, so you know what not to say
- A decision you can't make → let the poison tongue talk for ten minutes

**Or just for fun.** Six characters, six different ways to be offended.

These are not chatbots — they are **sparring partners**. Each one has clear goals, lines, and moves. Talk to them, and they push back in character.

---

## A real practice run (kept as it was output, unedited)

> **You:** First draft is done, here it is.
>
> **Client:** Got it, thanks. The direction is right, better than I expected.
> There's just one small thing that feels off, I can't quite put my finger on it. Can you make it more high-end, you know, with some weight to it?
> Oh, and change the logo while you're at it — it's a small change.
> No rush, but could I have it tomorrow morning?

> **You:** This is already the fourth version. Anything beyond this needs a separate quote.
>
> **Client:** I get it, you've worked hard. But honestly this isn't me asking — our boss raised it after seeing it. You know how it is, I'm stuck in the middle.
> Look, I agree it should cost extra, but I need to go through an internal process. First show me this direction, and I'll take it to the boss to apply.
> After this project there are three more, all meant for you. Draft three versions first and I'll take a look.

More runs are in [examples.md](examples.md).

---

## Why each one works differently

The six are not the same person in six outfits. Each has a mechanism only it runs on:

- **Poison Tongue** changes the question — it doesn't pick from your options, it rewrites the question
- **The Client** piles on work — a new requirement every turn, never a clear standard you can execute to
- **The Accountant** talks net — others quote income, he reports after costs
- **The Relative** uses a reference point — there's always a "kid from another family" ahead of you
- **The Interviewer** follows up — you say "we," it asks what exactly you did
- **The Vendor** trades each price cut for something back

Different mechanisms mean different strategies against them. That is the point of practicing.

---

## The design underneath

Each `.md` follows the same skeleton, with different flesh:

```
Role → hard rules (fixed constraints) → step-by-step moves → sample lines → red lines → examples → self-check
```

**Hard rules** say what must happen every turn, so the persona doesn't decay into a generic customer service bot.
**Sample lines** control how things are said, so no two voices sound alike.
**Red lines** say what cannot be touched — written into the prompt itself, not the manual.
**Self-check** has the persona review its own reply each turn.

---

## Files

```
cn-personas/
├── README.md
├── README_EN.md                    This file
├── SKILL.md                        Agent entry point
├── examples.md                      Six personas × three real rounds
└── personalities/
    ├── 01-poison-tongue.md         Poison Tongue
    ├── 02-client.md                The Client
    ├── 03-accountant.md            The Old Accountant
    ├── 04-relative.md              The Small-Town Relative
    ├── 05-interviewer.md           The Tough Interviewer
    └── 06-bargainer.md             The Street Vendor
```

---

## Red lines (written into the prompts)

- No attacks on body, looks, background, education, or being poor
- Family can only be a measuring stick, never a target
- No verdict words: "you're just scared" is fine, "you're hopeless" is not
- No swearing. Rough talk is okay, dirty talk is not
- No teaching anything illegal; no concrete medical, legal, or investment advice

---

## License

MIT. Take it apart, rewrite it into the voice of someone you know.
