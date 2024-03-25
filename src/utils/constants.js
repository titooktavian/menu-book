const PRODUCT_ITEM_TYPE = {
    SIMPLE: 1,
    IMAGE_LEFT: 2,
    IMAGE_TOP: 3,
};

const LOADING_TYPE = {
    RESTAURANT: 1,
    BREAKFAST: 2,
    HANDMADE: 3,
    SALAD: 4,
    BEVERAGE: 5,
    COFFEE: 6,
    SHOWCASE: 7,
    FOOTER: 8,
    HIDDEN: 10,
};

const LOADING_DESCRIPTION = {
    [LOADING_TYPE.RESTAURANT]: 'Restaurant Info',
    [LOADING_TYPE.BREAKFAST]: 'Breakfast Menu',
    [LOADING_TYPE.HANDMADE]: 'Pastry Menu',
    [LOADING_TYPE.SALAD]: 'Salad & Oat Menu',
    [LOADING_TYPE.BEVERAGE]: 'Beverage Menu',
    [LOADING_TYPE.COFFEE]: 'Coffee & Tea Menu',
    [LOADING_TYPE.SHOWCASE]: 'Our Showcase',
    [LOADING_TYPE.FOOTER]: 'Working Hours',
};

export {
    PRODUCT_ITEM_TYPE, LOADING_TYPE, LOADING_DESCRIPTION,
};
