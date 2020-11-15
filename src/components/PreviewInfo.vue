<template>
    <div class="preview_info">
        <h4 class="preview_info-title">Title</h4>
        <p class="preview_info-description">Quisque vulputate suscipit lectus, ac vulputate purus sollicitudin et. Aenean vulputate tellus eu ipsum suscipit rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In interdum placerat efficitur. Mauris elit augue, ultrices a velit sed, scelerisque malesuada velit.</p>

        <ul class="preview_info-comments">
            <li>ultrices a velit sed, scelerisque malesuada velit</li>
            <li>ultrices a velit sed, scelerisque malesuada velit</li>
            <li>ultrices a velit sed, scelerisque malesuada velit</li>
            <li>ultrices a velit sed, scelerisque malesuada velit</li>
            <li>ultrices a velit sed, scelerisque malesuada velit</li>
            <li>ultrices a velit sed, scelerisque malesuada velit</li>

            <li>
                <b-textarea rows="4"
                            cols="100"
                />
                <button class="btn btn-link">Добавить</button>
            </li>    
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PreviewInfo'
    }
</script>