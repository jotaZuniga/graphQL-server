import bcrypt from 'bcrypt';

export const hashPassword = async(rounds: number = 5, password: string): Promise<string> => {
    const hashedPass = await bcrypt.hash(password, rounds);
    return hashedPass;
}