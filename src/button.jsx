import Button from '@mui/material/Button';

export default function ButtonComponent() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px'}}>
            <Button variant="text">Text Button</Button>
            <Button variant="contained">Contained Button</Button>
            <Button variant="outlined">Outlined Button</Button>
            
            <Button color="primary" variant="contained">Primary</Button>
            <Button color="secondary" variant="contained">Secondary</Button>
            <Button color="success" variant="contained">Success</Button>
            <Button color="error" variant="contained">Error</Button>
            <Button color="info" variant="contained">Info</Button>
            <Button color="warning" variant="contained">Warning</Button>

            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>

            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" href="#contained-buttons">Link</Button>
            <Button variant="contained" fullWidth>Full Width</Button>
        </div>
    );
}
