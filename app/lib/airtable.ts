import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_TOKEN;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey) {
  throw new Error("Missing AIRTABLE_TOKEN");
}

if (!baseId) {
  throw new Error("Missing AIRTABLE_BASE_ID");
}

/* =========================================================
   Airtable Client
========================================================= */

const airtable = new Airtable({
  apiKey,
});

const base = airtable.base(baseId);

/* =========================================================
   Exports
========================================================= */

export default base;

export const airtableConfig = {
  apiKey,
  baseId,
};