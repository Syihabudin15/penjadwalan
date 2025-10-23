<?php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // domain React
    'allowed_headers' => ['*'],
    'supports_credentials' => true,
];
