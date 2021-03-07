const filterFn = (query: string, innerProp?: string) => {

    return (element: string) => {

        let box = element;

        if(innerProp) {
            const levels: string[] = innerProp.split('.');
            for(const level of levels) {
                box = element[level];
            }
        }
        return (box ?? '').toLowerCase().indexOf((query ?? '').toLowerCase()) > -1;
    };
}

export default filterFn;