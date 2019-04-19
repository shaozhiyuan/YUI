import classes from '../classes';

describe('classes', () => {
    it('接受一个className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('接受2个className', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });
    it('接受undefined', () => {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    });
    it('接受奇怪参数', () => {
        const result = classes('a', undefined, '中文', false, null);
        expect(result).toEqual('a 中文');
    });
    it('什么都不传', () => {
        const result = classes();
        expect(result).toEqual('');
    });

});