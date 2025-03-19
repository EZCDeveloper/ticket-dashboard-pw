export interface TestData {
    ticket: {
        title: string,
        description: string,
        priority: string,
        progress: string,
        status: string
    }
}

export const TEST_DATA: TestData = {
    ticket: {
        title: 'Fix The Car',
        description: 'We need to fix the computer. Check the HD',
        priority: '2',
        progress: '5',
        status: 'started'
    }
}