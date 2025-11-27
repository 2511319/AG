export interface Action {
    id: string;
    label: string;
    target: string;
}

export interface Screen {
    id: string;
    title: string;
    kind: 'service' | 'hub' | 'game' | 'gm' | 'editor' | 'info';
    description: string;
    actions?: Action[];
    backTarget?: string;
}

export type ScreenMap = Record<string, Screen>;
