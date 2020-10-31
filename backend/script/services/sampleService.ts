class SampleService {
    async getSample(): Promise<string> {
        await new Promise((res) => setTimeout(res, 1000));
        const sampleMessage: string = 'OK';
        return sampleMessage;
    }
}

export default new SampleService();