import { TextLineStream } from 'jsr:@std/streams';

export async function getFileLinesStream(filePath: string) {
    const file = await Deno.open(filePath, { read: true });
    const lines = file.readable.pipeThrough(new TextDecoderStream()).pipeThrough(new TextLineStream());

    return lines;
}