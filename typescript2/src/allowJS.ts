import {aha} from './javascript';

// would error, aha returns number, not string
// function typedAha(): string {
function typedAha(): number {
    return aha();
}
