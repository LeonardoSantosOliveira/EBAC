namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(2);
    (idade as string).length;
    (idade as string[]).concat()

    let nome: string = 35 as unknown as string
}