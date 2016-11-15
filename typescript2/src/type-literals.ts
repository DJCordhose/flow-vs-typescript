function formatUnsafe(text: string, format: {
    strikeThrough: boolean,
    underline: boolean
}) {
    const {strikeThrough, underline} = format;
    if (strikeThrough && underline) {
        throw new Error('Illegal format');
    }
}

try {
    formatUnsafe('my text', {strikeThrough: true, underline: true});
} catch (ex) {
    console.error(`ouch: ${ex}`);
}

type formatType = { strikeThrough: true, underline: false } | { strikeThrough: false, underline: true}
    | { strikeThrough: false, underline: false };

function formatSafe(text: string, format: formatType) {
    const {strikeThrough, underline} = format;
    // no need to check, typescript does it for us
}

// does not even compile
// formatSafe('my text', {strikeThrough: true, underline: true});
formatSafe('my text', {strikeThrough: false, underline: true});
formatSafe('my text', {strikeThrough: true, underline: false});
formatSafe('my text', {strikeThrough: false, underline: false});
