import { Config } from "eslint/config";

export default function (options: {
	react?: boolean;
	vue?: boolean;
	node?: boolean;
	browser?: boolean;
}): Config;
