import { HeroRole } from "./hero-role.enum";

export class Hero {
    id!: number;
    name!: string;
    description!: string;
    academy = '';
    quirk = '';
    superMoves: string[] = [];
    role!: HeroRole;
    profileImageUrl = '';

    /**
     * Constructor
     */
    constructor(id: number, name: string, role: HeroRole) {
        if (!id) throw new InvalidArgumentError('Invalid hero id!');
        if (!name) throw new InvalidArgumentError('Invalid hero name!');
        if (!role) throw new InvalidArgumentError('Invalid hero role!');

        this.id = id;
        this.name = name;
        this.role = role;
    }

    setAcademy(academy: string): void {
        if (!academy) throw new InvalidArgumentError(nameof(academy));
        this.academy = academy;
    }

    setQuirk(quirk: string) {
        if (!quirk) throw new InvalidArgumentError(nameof(quirk));
        this.quirk = quirk;
    }
}

export class InvalidArgumentError extends Error {
    constructor(argument: string) {
        super(`${argument} is invalid!`);
    }
}

export function nameof(variable: unknown): string {
    return Object.keys({ variable })[0]
};