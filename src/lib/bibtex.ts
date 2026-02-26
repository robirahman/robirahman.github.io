import { parse } from "bibtex-parse";
import fs from "node:fs";
import path from "node:path";

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  booktitle?: string;
  doi?: string;
  arxiv?: string;
  html?: string;
  website?: string;
  abbr?: string;
  selected?: boolean;
}

function parseAuthors(raw: string): string[] {
  return raw.split(" and ").map((a) => {
    const parts = a.trim().split(",");
    if (parts.length === 2) {
      return `${parts[1].trim()} ${parts[0].trim()}`;
    }
    return a.trim();
  });
}

export function loadPublications(): Publication[] {
  const bibPath = path.join(process.cwd(), "src/data/papers.bib");
  const raw = fs.readFileSync(bibPath, "utf-8");
  const entries = parse(raw);

  return entries
    .filter((e: any) => e.type === "article" || e.type === "inproceedings")
    .map((e: any) => {
      const fields = Object.fromEntries(
        (e.fields || []).map((f: any) => [f.name, f.value])
      );
      return {
        key: e.key,
        type: e.type,
        title: fields.title || "",
        authors: parseAuthors(fields.author || ""),
        year: parseInt(fields.year || "0", 10),
        journal: fields.journal,
        booktitle: fields.booktitle,
        doi: fields.doi,
        arxiv: fields.arxiv,
        html: fields.html,
        website: fields.website,
        abbr: fields.abbr,
        selected: fields.selected === "true",
      };
    })
    .sort((a: Publication, b: Publication) => b.year - a.year);
}

export function generateBibtex(pub: Publication): string {
  const lines = [`@${pub.type}{${pub.key},`];
  lines.push(`  title={${pub.title}},`);
  lines.push(
    `  author={${pub.authors.map((a) => {
      const parts = a.split(" ");
      if (parts.length >= 2) {
        return `${parts[parts.length - 1]}, ${parts.slice(0, -1).join(" ")}`;
      }
      return a;
    }).join(" and ")}},`
  );
  lines.push(`  year={${pub.year}},`);
  if (pub.journal) lines.push(`  journal={${pub.journal}},`);
  if (pub.booktitle) lines.push(`  booktitle={${pub.booktitle}},`);
  if (pub.doi) lines.push(`  doi={${pub.doi}},`);
  lines.push("}");
  return lines.join("\n");
}
