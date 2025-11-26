/**
 * This file is auto-generated (or manually derived) from the backend contracts.
 * Source: @rpg/contracts (D:\project\mimic_codex\contracts)
 */

export interface SceneResponse {
    tone: string;
    textSegments: {
        id: string;
        md: string;
    }[];
    choices: {
        id: string;
        label: string;
        skillCheck?: {
            skill: string;
            dc: number;
        };
    }[];
    consequences?: {
        success: string[];
        partial: string[];
        fail: string[];
    };
}

export interface TelegramAuthRequest {
    /** Строка initData из Telegram WebApp */
    initData: string;
}

export interface TelegramUser {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string | null;
    username?: string | null;
    language_code?: string | null;
    allows_write_to_pm?: boolean | null;
}

export interface TelegramChat {
    id: number;
    type: string;
    title?: string | null;
    username?: string | null;
}

export interface TelegramAuthResponse {
    /** JWT access token */
    accessToken: string;
    tokenType: "Bearer";
    expiresIn: number;
    issuedAt: string;
    user: TelegramUser;
    chat?: TelegramChat;
}

export interface ApiError {
    error: {
        code: string;
        message: string;
        details?: Array<{ field: string; rule: string }>;
        request_id?: string;
        trace_id?: string;
        doc_url?: string;
    };
}
