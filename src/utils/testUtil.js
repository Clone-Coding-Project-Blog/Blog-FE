export const getTestProps = () => {
    return new Array(20).fill("Test Title").map(function(element){
        return {
            title: element,
            subtitle: element + "Sub",
            html: "Contents",
            createDate: new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, ''),
            tags: testTags(),
            username: "Mizzle"
        }
    })
};

const testTags = () => {
    return new Array(5).fill("a").map(function() {
        return {
            key: getRandomKey(13),
            name: getRandomKey(5)
        };
    })
}

export const getRandomKey = (length) => {
    return Math.random().toString(36).substr(2,length);
};