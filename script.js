let fields = [
    null,
    null,
    'circle',
    null,
    null,
    'cross',
    null,
    null,
    null,
];

function init() {
    render();
}

function getCircleSvg(width = 100, height = 100) {
    const radius = Math.min(width, height) / 2 * 0.8;
    const cx = width / 2;
    const cy = height / 2;
    
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#333" stroke-width="3"/>
    </svg>`;
}

function getCrossSvg(width = 100, height = 100) {
    const padding = Math.min(width, height) * 0.2;
    const x1 = padding;
    const y1 = padding;
    const x2 = width - padding;
    const y2 = height - padding;
    
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#333" stroke-width="3"/>
        <line x1="${x2}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#333" stroke-width="3"/>
    </svg>`;
}

function render() {

    let html = '<table>';
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            const field = i * 3 + j;
            let cellContent = '';

            if (fields[field] === 'cross') {
                cellContent = getCrossSvg();
            } else if (fields[field] === 'circle') {
                cellContent = getCircleSvg();
            }
            html += `<td>${cellContent}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';

    document.getElementById('content').innerHTML = html;
}