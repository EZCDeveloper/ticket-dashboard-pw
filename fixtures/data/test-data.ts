export interface Ticket {
    title: string;
    description: string;
    priority: string;
    progress: string;
    status: string;
}

export interface TestData {
    ticket: Ticket[]
}

export const TEST_DATA: TestData = {
    ticket: [
        {
            title: 'Fix The Car',
            description: 'We need to fix the computer. Check the HD',
            priority: '2',
            progress: '5',
            status: 'started'
        },
        {
            title: 'Develop the web for Cats',
            description: 'Book a call with Chris. Ask for core functionalities',
            priority: '4',
            progress: '2',
            status: 'started'
        },
    ]

}