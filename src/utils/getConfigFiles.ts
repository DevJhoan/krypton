import type { MessagesFile } from "@/types/Messages";
import type { CommandsFile } from "@/types/Command";
import type { ConfigFile } from "@/types/Config";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { load } from "js-yaml";

export const messages = load(
	readFileSync(join(process.cwd(), "config", "messages.yml"), "utf8"),
) as MessagesFile;

export const config = load(
	readFileSync(join(process.cwd(), "config", "config.yml"), "utf8"),
) as ConfigFile;

export const commands = load(
	readFileSync(join(process.cwd(), "config", "commands.yml"), "utf8"),
) as CommandsFile;
