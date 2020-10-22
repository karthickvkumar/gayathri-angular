export namespace Model{
    export interface LoginModel{
        username : string,
        password: string,
        captcha: string
    }

    export interface LoginErrorModel{
        username : string,
        password: string,
        captcha: string
    }

    export interface studentModel{
        name: string,
        score: number|string
    }
}


